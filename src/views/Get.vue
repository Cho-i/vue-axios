<template>
	<div class="get">
		<h2>GET</h2>
		<div class="list">
			<div class="user" v-for="(user, idx) in users" :key="idx">
				<img :src="`${user.avatar}`" alt />
				<ul>
					<li><em>FirstName :</em>{{user.first_name}}</li>
					<li><em>LastName :</em>{{user.last_name}}</li>
					<li><em>Email :</em>{{user.email}}</li>
				</ul>
			</div>
		</div>
		<Paging :totalPage="totalPage" @movePage="movePage" />
	</div>
</template>

<script>
	import Paging from '@/components/Paging.vue'
	export default {
		name: 'Get',
		components: {
			Paging
		},
		data() {
			return{
				users: null,
				totalPage: null,
				pageNum: 1
			}
		},
		methods: {
			getData(pageNum) {
				this.$axios.get('https://reqres.in/api/users?page=' + pageNum)
					.then(res => {
						console.log(res);
						this.users = res.data.data;
						this.totalPage = res.data.total_pages;
					})
					.catch(err => {
						console.log(err);
					});
			},
			movePage(page) {
				this.getData(page);
			}
		},
		created() {
			this.getData(this.pageNum);
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		display:flex;
		flex-wrap:wrap;
		.user{
			width:calc(100% / 3);
			margin:10px 0;
			ul{
				li{
					em{
						font-weight:700;
						font-style:normal;
					}
				}
			}
		}
	}
</style>