<template>
  <div class="useing-axios-wraper">
    <span>useing-axios-wraper</span>
    <el-row>
      <el-button
        type="primary"
        :loading="btn.getMethLoading"
        @click="handleGet"
        plain
        >GET请求</el-button
      >
      <el-button
        type="primary"
        :loading="btn.postMethLoading"
        @click="handlePost"
        >POST请求</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { requestJobList, requestTestDevJob } from "@/api/jobTask";
import { uuid } from "@/utils/index";
export default {
  name: "UsesingAxios",
  data() {
    return {
      btn: {
        getMethLoading: false,
        postMethLoading: false,
      },
      search: {
        // 查询条件
        taskTreeQuery: "", // 左侧列表树查询
        envCode: "17", // 环境
        type: "",
        reviewStatus: "", // 审批类型
        name: "", // 任务名
        createTime: "", // 创建时间
        modifyTime: "", // 修改时间
        tagId: "", // 标签
        userType: ["creator"], // 所属人类型
        userName: ["admin"], // 所属人
      },
    };
  },
  mounted() {},
  methods: {
    handleGet() {
      // get请求方式
      this.getJobList();
    },
    handlePost() {
      // post请求方式
      this.requestTestDevJobFn();
    },
    async requestTestDevJobFn() {
      const params = {
        extend: "",
        projectId: "13",
        typeTagid: "shell",
        abstractId: 1157,
        l1LocationId: 160,
        l2LocationId: 1157,
        description: "sh_runonce_name_unique_01",
        name: "sh_runonce_name_unique" + uuid(),
        schedulerList: [
          {
            schedulerId: 57,
            schedulerName: "Project_RunOnce",
          },
        ],
        tagList: [
          {
            groupId: 203,
          },
        ],
        jobOrSchema: "JOB",
        taskIncreType: "",
      };
      this.btn.postMethLoading = true;
      const res = await requestTestDevJob(params);
      if (res) {
        console.log(res);
        this.btn.postMethLoading = false;
      }
    },
    async getJobList() {
      const para = {
        page: 0,
        size: 20,
        sort: "createTime,desc",
        ...this.search, // 查询条件
      };
      para.userName = para.userName.join(",");
      para.userType = para.userType.join(",");
      this.btn.getMethLoading = true;
      const res = await requestJobList(para);
      if (res) {
        console.log(res);
        this.btn.getMethLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.useing-axios-wraper {
  background-color: #fff;
}
</style>
