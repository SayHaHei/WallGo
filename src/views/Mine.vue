<template>
	<div>
		<img
			class="headerimg"
			src="
https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1901/vue/vue_banner.png"
			alt=""
		/>
		<ul>
			<li
				class="mineitem"
				v-for="item in minearray"
				@click="itemclick(item)"
				:key="item.label"
			>
				<span class="minetitle">{{ item.label }}</span>
				<i class="cubeic-arrow"></i>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			minearray: [
				{ label: "商品收藏" },
				{ label: "我的足迹" },
				{ label: "店铺收藏" },
				{ label: "我的订单" },
				{ label: "退出", type: "exit" }
			]
		};
	},
	methods: {
		itemclick(item) {
            console.log("exit");
			if (item.type == "exit") {
				this.$store.commit("setToken", "");
				localStorage.removeItem("token");
				this.$router.push({ path: "/login" });
			}
		}
	}
};
</script>

<style lang="stylus" scoped>
.mineitem
    font-size 14px
    text-align left
    height   50px
    line-height 50px
    padding-left 5%
    border-bottom 1px solid #eee
    .minetitle
        display inline-block
        width 90%
.headerimg
    height 150px
    width  100%
</style>
