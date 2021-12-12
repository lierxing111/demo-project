import request from "./request";

// 查询列表
export function requestJobList(data) {
  data.statuses = "D"; // 过滤掉状态为D得数据
  return request({
    url: "api/bddpMetaJob",
    method: "get",
    params: data,
  });
}

// 保存
export function requestTestDevJob(data) {
  return request({
    url: "api/bddpMetaJob/createJob",
    method: "post",
    data,
  });
}

// 下载
export function downloadPsFile(data) {
  return request({
    url: "api/bddpMetaJob/downloadPsFile",
    method: "post",
    data,
  });
}
