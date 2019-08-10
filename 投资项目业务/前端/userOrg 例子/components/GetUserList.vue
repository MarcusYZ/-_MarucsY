<template>
  <div>
    <PageTable ref="userTable" action="QueryUserList" :highlightRow="true" :columns="columns" :isPage="true" :initParam="user">
    </PageTable>
  </div>
</template>
<script>
export default {
  components: {

  },
  props: { 
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      tableData: [],
      columns: [
        {
          title: "序号",
          type: "index",
          width: 50,
          // fixed: "left",
          align: "center"
        },
        {
          title: "用户",
          key: "userCode",
          sortable: true,
        },
        {
          title: "用户名称",
          key: "userName",
          sortable: true,
        },
        {
          title:"状态",
          sortable: true,
          key: "enabled",
        },
        {
          title:"生效日期",
          sortable: true,
          key: "effectBegin",
        },
        {
          title: "失效日期",
          sortable: true,
          key: "effectEnd",
        }
      ]
    }
  },
  computed: {

  },
  created: function () {
    this.$emit('SetTitle', "选择用户");
    this.$emit('SetPageSize', 1200);
    this.$emit('SetPageActions', [
      {
        text: this.$t("common.save"),
        theme: "primary",
        icon: "edit",
        handle: () => {
          this.$emit('Close', this.$refs["userTable"].getHighlightRow());
        }
      }
    ]);
  },
  beforeMount: function () {

  },
  mounted: function () {
    // setTimeout(() => {
    //   this.queryProject();
    // }, 500)
    // this.search();
  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
  methods: {

  },
  watch: {

  },
  directives: {

  }
}
</script>
<style  lang="less" scopend>
.single-table-con {max-height:400px}
</style>
