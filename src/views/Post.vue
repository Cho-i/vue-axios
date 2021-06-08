<template>
	<div class="post">
		<h2>POST</h2>
		<div class="form-box">
			<div class="form-item">
				<input type="email" v-model="email" placeholder="Email을 입력해주세요." id="email">
			</div>
			<div class="form-item">
				<input type="password" v-model="password" placeholder="비밀번호를 입력해주세요." id="pw">
			</div>
			<div class="form-item">
				<button type="submit" v-on:click="onLogin">login</button>
			</div>
		</div>
		<br>
		<br>
		<p>email: eve.holt@reqres.in<br>password: cityslicka</p>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: 'Post',
	data() {
		return{
			email : '',
			password : ''
		}
	},
	methods: {
		onLogin() {
			const url = 'https://reqres.in/api/login';
			const data = {
				email: this.email,
				password: this.password
			}
			axios.post(url, data)
				.then(res => {
					console.log(res);
					console.log('성공');
				}).catch(err => {
				console.log(err);
				console.log('실패');
				throw new Error(err);//즉시에러일으키기
			})
		}
	}
	
}
</script>

<style lang="scss" scoped>
.form-box{
	display:flex;
	flex-flow:column;
	width:50%;
	margin:0 auto;
	.form-item{
		display:flex;
		&:nth-child(n+2){
			margin-top:5px;
		}
		input{
			display:inline-block;
			width:100%;
			padding:10px;
			background:#fff;
			border:1px solid #000;
		}
		button{
			display:inline-block;
			width:100%;
			padding:10px;
			background:#42b983;
			color:#fff;
			border:none;
			cursor:pointer;
			text-transform:uppercase;
		}
	}
}
</style>