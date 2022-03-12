<template>
  <div class="git-pull-all-branches">
    <!-- git 拉取所有远程分支 -->
    <p>
      <a href="https://blog.csdn.net/tabweb/article/details/107535511"
        >git 拉取所有远程分支</a
      >
      <br />
      git clone 只能clone远程库的master分支，无法clone所有分支，解决办法如下：
      <br />
      方法一： <br />
      1. 找一个干净目录，假设是git_work <br />
      2. cd git_work <br />
      3. git clone http://myrepo.xxx.com/project/.git <br />
      4. cd project <br />
      5. git branch -a 列出所有分支名称如下: <br />
      remotes/origin/dev <br />
      remotes/origin/release/4 <br />
      6. git checkout -b dev origin/dev <br />
      7. git checkout -b release origin/release <br />
    </p>
    <hr />
    <p>
      方法二: <br />
      git clone xxx <br />
      git branch -r | grep -v '\->' | while read remote; do git branch --track
      "${remote#origin/}" "$remote"; done <br />
      git fetch --all <br />
      git pull --all <br />
    </p>
    <hr />
    <p>
      <a href="https://blog.csdn.net/ycg33/article/details/105258682"
        >Git查看本地分支、远程分支、所有分支：
      </a>
      <br />
      git branch <br />
      git branch -r <br />
      git branch -a <br />
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.git-pull-all-branches {
  background-color: #fff;
}
</style>
