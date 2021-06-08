<template>
	<ul class="paging">
		<li v-for="(page, idx) in totalPage" :key="idx" @click="movePage(page)">{{page}}</li>
	</ul>
</template>

<script>
export default {
	name: "paging",
	props: ["totalPage"],
	methods: {
		movePage(page) {
			this.$emit("movePage", page);
		}
	}
}
</script>

<style lang="scss" scoped>
.paging{
	display:flex;
	justify-content:center;
	align-items:center;
	margin:20px 0;
	li{
		cursor:pointer;
		padding:5px 10px;
	}
}
</style>