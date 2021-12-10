import request from "./request";

export function requestJobList(data) {
  data.statuses = "D"; // 过滤掉状态为D得数据
  return request({
    url: "api/bddpMetaJob",
    method: "get",
    params: data,
  });
}

export function requestTestDevJob(data) {
  return request({
    url: "api/bddpMetaJob/createJob",
    method: "post",
    data,
  });
}
