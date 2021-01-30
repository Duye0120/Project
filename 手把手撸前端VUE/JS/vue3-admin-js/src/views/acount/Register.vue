<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input
            v-model:value="account_form.username"
            type="text"
            autocomplete="off"
            class="nomal-width"
          />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input
            v-model:value="account_form.password"
            type="password"
            autocomplete="off"
            class="nomal-width"
          />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input
            v-model:value="account_form.passwords"
            type="password"
            autocomplete="off"
            class="nomal-width"
          />
        </a-form-item>

        <a-form-item name="code">
          <a-row class="nomal-width">
            <a-col :span="14">
              <a-input
                maxlength="6"
                v-model:value="account_form.code"
                type="text"
                autpcomplete="off"
              ></a-input>
            </a-col>
            <a-col :span="10">
              <a-button block type="primary">获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block class="nomal-width">
            注册
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a> |
        <a href="" class="color-white">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
// 导入验证类的方法
import {
  checkPhone,
  checkPassword as password,
  checkCode as code,
} from "@/utils/verification.js";
import { onMounted, reactive, ref, toRefs } from "vue";
// 局部组件
import Captcha from "@/components/Captcha";
export default {
  name: "Login",
  components: { Captcha },
  setup(props) {
    /**
     * 检测用户名
     */
    const checkUserName = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入用户名"); //错误的情况
      } else if (!checkPhone(value)) {
        return Promise.reject("请输入11位数字的手机号");
      } else {
        // callback();
        return Promise.resolve();
      }
    };
    /**
     * 校验密码
     */
    const checkPassword = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入密码"); //错误的情况
      } else if (!password(value)) {
        return Promise.reject("请6-20位数字+字母");
      } else {
        // callback();
        return Promise.resolve();
      }
    };
    /**
     * 再次校验密码
     */
    const checkPasswords = async (rule, value, callback) => {
      const password = formConfig.account_form.password;
      if (!value) {
        return Promise.reject("请输入相同的密码"); //错误的情况
      } else if (password && value) {
        // 当两个密码都存在的时候才会校验
        if (password !== value) {
          return Promise.reject("两次密码不一致");
        }
      } else {
        // callback();
        return Promise.resolve();
      }
    };

    /**
     * 校验验证
     */
    const checkCode = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入验证码"); //错误的情况
      } else if (!code(value)) {
        return Promise.reject("请6位数字+字母验证码");
      } else {
        // callback();
        return Promise.resolve();
      }
    };
    // let number = ref(10); //定义基础数据类型：number,string,boolear,null,undefault,symbol
    const formConfig = reactive({
      layout: {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 },
      },
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
      rules_form: {
        username: [{ validator: checkUserName, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        passwords: [{ validator: checkPasswords, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }],
      },
    });

    const data = toRefs(formConfig);

    // 提交表单
    const handleFinish = () => {};

    onMounted(() => {});

    return {
      ...data,
      handleFinish,
    };
  },
};
</script>
<style lang="scss">
@import "./style.scss";
</style>
