<template>
  <div class="recommend-wraper">
    <!-- <div>推荐</div> -->
    <div class="recommend">
      <div class="recommend-content">
        <div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable.scss";
.recommend-wraper {
  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0px;
    .recommend-content {
      .recommend-list {
        .list-title {
        }
      }
    }
  }
}
</style>
