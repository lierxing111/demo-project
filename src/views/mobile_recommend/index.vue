<template>
  <div class="recommend-wraper">
    <!-- <div>推荐</div> -->
    <div class="recommend">
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
          <div class="slider-wrapper" ref="sliderWrapper">
            <slider>
              <div
                class="slider-item"
                v-for="(item, index) in carouselList"
                :key="index"
              >
                <a :href="item.link">
                  <img class="needsclick" :src="item.pic" @load="loadImage"
                /></a>
              </div>
            </slider>
          </div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li class="item" v-for="(item, index) in discList" :key="index">
                <div class="icon">
                  <img width="60" height="60" v-lazy="item.imgurl" />
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import { discList, carouselList } from "@/api/testData.js";
import Scroll from "@/components/common/Scroll.vue";
export default {
  name: "Recommend",
  components: {
    Scroll,
  },
  data() {
    return {
      checkloaded: false,
      // 轮播图
      carouselList: carouselList,
      // 推荐
      discList: discList,
    };
  },
  methods: {
    loadImage() {
      console.log("this.checkloaded: ", this.checkloaded);
      if (!this.checkloaded) {
        this.checkloaded = true;
        this.$refs.scroll.refresh();
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.scroll.refresh();
    }, 2000);
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
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .recommend-list {
        .list-title {
          // background-color: #fff;
          height: 65px;
          width: 100%;
          font-size: $font-size-medium;
          color: $color-theme;
          line-height: 65px;
          text-align: center;
        }
        ul .item {
          display: flex;
          padding: 0 20px 20px 20px;
          box-sizing: border-box;
          // align-items: center;
          .icon {
            display: flex;
            flex: 0 0 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
            .name {
              margin-bottom: 10px;
              color: $color-text;
            }
            .desc {
              color: $color-text-d;
            }
          }
        }
      }
    }
  }
}
</style>
