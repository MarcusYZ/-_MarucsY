<template>
    <div class="sidelip-box">
        <Form :model="formModel" ref="modelForm" :rules="rules" :label-width="120" size="small" inline>
            <Row class="code-row-bg">
                <Col span="12">
                    <Form-item label="公司名称">
                        <Input v-model.trim="formModel.orgName" disabled/>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="用户名称">
                        <Input v-model.trim="formModel.userName" @click.native="getUser()" readonly :disabled="editFlag"/>
                        <Icon class="getList-icon" @click.native="getUser()"></Icon>
                    </Form-item>
                </Col>
            </Row>
            <Row class="code-row-bg">    
                <Col span="12">
                    <Form-item label="生效日期">
                        <Input v-model.trim="formModel.effectBegin"/>
                    </Form-item>
                </Col>
                <Col span="12">
                    <Form-item label="失效日期">
                        <Input v-model.trim="formModel.effectEnd"/>
                    </Form-item>
                </Col>
            </Row>
            <Row class="code-row-bg">    
                <Col span="12">
                <Form-item label="是否可录入" prop="isInsert">
                    <Select v-model="formModel.isInsert">
                      <Option v-for="item in isInsertList" :title="item.vsiValue" :value="item.vsiKey" :key="item.vsiKey">{{ item.vsiValue }}</Option>
                    </Select>
                </Form-item>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
import GetUser from "./GetUserList.vue";
export default {
  components: { 
    GetUser 
    },
  props: {
    row: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  beforeCreate(){
  },
  created() {
    $store
      .dispatch("GetValueSetByCode", { code: "IMS_YES_NO" })
      .then(response => {
        this.isInsertList = response.dataResult;
      });
    this.formModel.orgId=this.row.orgId;
    this.formModel.orgName=this.row.orgName;
    this.$emit("SetTitle",this.row.id ? "编辑记录" : "新增记录");
    if(this.row.id){
      this.init();
    }else{
      this.editFlag = false;
    };

    this.$emit("SetPageSize", 700);
    this.$emit("SetPageActions", [
      {
        text: this.$t("common.save"),
        theme: "primary",
        handle: this.save
      }

    ]);
  },
  mounted() {
  },
  data() {
    return {
      editFlag:true,
      isInsertList:[],
      formModel: {
        id: "",
        userCode:"",
        userName:"",
        enabled:"",
        isInsert:"",
        orgId:"",
        orgName: "",
        effectBegin:"",
        effectEnd: ""
      },//formModel end
      rules: {
        isInsert: [{ required: true, message: "请选择是否可录入", trigger: "change" }],
      }
    };
  },
  methods: {
    getUser(){
      if(this.formModel.id){
          return;
      }else{
          if (!this.formModel.orgId) {
             this.$Message.warning({
               content: "请选择公司",
               duration: 3
             });
             return;
           }else{
            new this.$pageModal(
              GetUser, 
              { 
                props:{
                  user:{
                    orgId:this.formModel.orgId,
                    enabled:'1'//启用状态的用户
                    }
                }
              }, data => {
              if (!!data) {
                this.formModel.userId = data.userId;
                this.formModel.userCode = data.userCode;
                this.formModel.userName = data.userName;   
                this.formModel.enabled = data.enabled;
              } else {
                this.formModel.userId = "";
                this.formModel.userCode = "";   
                this.formModel.userName = "";
                this.formModel.enabled = "";
              }
            });
          }
      }
    },

    save() {
      this.$refs["modelForm"].validate(valid => {
        if (valid) {
          $store.dispatch("Save", this.formModel).then(response => {
              if (response.statusCode == "0") {
                this.$Message.success({
                content: response.msg,
                duration: 1
                });
              this.$emit("Close", []);
              } else {
                this.$Message.error({
                  content: response.msg,
                  duration: 1
                });
              }
           });
           } else {
          this.$Message.error({
            content: "表单验证未通过，请修改",
            duration: 3
          });
        }
      });
    },
    init(){
        if(this.row.id){
          this.formModel.id = this.row.id;
          this.formModel.orgId = this.row.orgId;
          this.formModel.orgName = this.row.orgName;
          this.formModel.userId = this.row.userId;
          this.formModel.userCode = this.row.userCode;
          this.formModel.userName = this.row.userName;
          this.formModel.enabled = this.row.enabled;
          this.formModel.isInsert = this.row.isInsert;
          this.formModel.effectBegin = this.row.effectBegin;
          this.formModel.effectEnd = this.row.effectEnd;
        }
    }

  }//methods end
};
</script>

<style>
.list-show-modify > .single-table-con {
  padding-top: 0px;
  border-top: none;
}
</style>