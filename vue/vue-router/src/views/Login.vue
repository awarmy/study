<template>
  <el-tabs type="border-card">
    <el-tab-pane label="登录">
      <el-form ref="loginForm" v-bind:model="loginForm" v-bind:rules="rules">
        <el-form-item prop="mobile">
          <el-input
            placeholder="请输入手机号码"
            prefix-icon="el-icon-user"
            v-model="loginForm.mobile"
            maxlength = "11"
            >
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-key"
            v-model="loginForm.pwd" 
            show-password
            minlength="6"
            >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="onSubmitLogin('loginForm')">登录</el-button>
          <el-button v-on:click="onResetLogin('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>  
    </el-tab-pane>
    <el-tab-pane label="注册">
      <el-form ref="regForm" v-bind:model="regForm" v-bind:rules="rules">
        <el-form-item prop="mobile">
          <el-col :span="16">
            <el-input
              placeholder="请输入手机号码"
              prefix-icon="el-icon-mobile"
              v-model="regForm.mobile"
              maxlength = "11"
            >
            </el-input>
          </el-col>  
          <el-col class="line" :span="2">|</el-col>
          <el-col :span="6">
            <el-button type="text" v-on:click="onGetCode">{{message}}</el-button>
          </el-col>  
        </el-form-item>  
        <el-form-item prop="name">
          <el-input
            placeholder="请输入姓名"
            prefix-icon="el-icon-user-solid"
            v-model="regForm.name"
            minlength = "6"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-key"
            v-model="regForm.pwd"
            minlength = "6"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="regForm.checked" ></el-checkbox>
          我已阅读并同意<el-link type="primary">丽心理用户服务协议</el-link>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" v-bind:disabled="!regForm.checked" v-on:click="onSubmitReg('regForm')">注册</el-button>
        </el-form-item>
      </el-form>    
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        message:'获取验证码',
        loginForm: {
          mobile: '',
          pwd: '',
        },
        regForm:{
          mobile:'',
          name:'',
          pwd:'',
          checked:false,
          code:'',
        },
        rules:{
          mobile: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '输入正确的手机号码', trigger: 'blur' }
          ],
          pwd:[
            { required:true,message:'请输入密码',trigger:'blur'},
            { min: 6, message: '密码最少六个字符', trigger: 'blur' }
          ],
          name:[
             { required:true,message:'请输入姓名',trigger:'blur'},
          ]
        },
        handle:null,
      };
    },
    methods: {
      handleClick(tab, event) {
        window.console.log(tab, event);
      },
      onSubmitLogin(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert('登录成功', '提示', {
              confirmButtonText: '确定',
              customClass:'loginAlert',
              showClose:false,
              callback: (/*action*/) => {
                const redirect = this.$route.query.redirect;
                window.logined = true;
                if(redirect){
                  window.console.log(redirect);
                  this.$router.push(redirect);
                }
                else{
                  this.$router.replace("/main");
                }
                // this.$message({
                //   type: 'info',
                //   message: `action: ${ action }`
                // });
              }
            });

          } else {
            return false;
          }
        });
      },
      onSubmitReg(formName){
        this.$refs[formName].validate((valid) =>{
          if(valid){
            this.$alert('注册成功', '提示', {
              confirmButtonText: '确定',
              customClass:'loginAlert',
              showClose:false,
              callback: (action) => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }
          else{
            return false;
          }
        })
      },
      onResetLogin(formName){
        this.$refs[formName].resetFields();
      },
      onGetCode(){
        if(this.handle == null){
            this.message = `倒计时(60)`;
            var time = 10,
                self = this;
            this.handle = window.setInterval(function(){
              time--;
              if(time == 0){
                self.clearInterval();
              }
              else{
                self.message = `倒计时(${time})`;
              }
            },1000);
        }

        this.$prompt('请输入验证码', '提示', {
          confirmButtonText: '确定',
          showCancelButton:false,
          inputPlaceholder:'输入验证码',
          inputPattern: /^\d{4}$/,
          inputErrorMessage: '验证码格式不正确',
          customClass:'loginAlert',
          // showClose:false,
        }).then(({ value }) => {
            this.regForm.code = value;
            this.clearInterval();
        }).catch(() => {
          //
        });  
      },
      clearInterval(){
        window.clearInterval(this.handle);
        this.message = "获取验证码";
        this.handle = null;
      },
    },
    
  };
</script>

<style scoped>
.loginAlert{
  width:80%;
}
</style>