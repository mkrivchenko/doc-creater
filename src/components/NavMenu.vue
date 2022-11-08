<template>
	<nav class="navbar noprint">
		<ul class="navbar__list">
			<li class="navbar__item">
				<input id="radio-1" type="radio" name="radio" value="gaz" @change="getVariant" checked>
				<label for="radio-1">Догазификация</label>
			</li>
			<li class="navbar__item">
				<input id="radio-2" type="radio" name="radio" value="connect" @change="getVariant">
				<label for="radio-2">Техническое присоединение</label>
			</li>
		</ul>
	</nav>		
</template>

<script>

export default {
	name: 'NavMenu',
	methods: {
		getVariant(e) {
			console.log(e);
			this.$emit('getVariant', this.DocumentVariant = e.target.value)
			console.log(this.DocumentVariant)
		}
	},
	data() {
		return {
			DocumentVariant: '',
		}
	}
}

</script>

<style lang="less">
@import '@/style/_var-library.less';


.navbar {
	background-color: @main-blue-color;
    color: @light-default-color;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px;

	display: flex;
	align-items: stretch;
	

	height: 50px;
	padding: 0px 10px;

	&__list {
		
		display: flex;
		align-items: center;
		gap: 20px;
		
	}

	&__item {
		display: flex;		
		align-items: center;
		gap: 10px
	} 

	&__item > input {
		width: 20px;
		height: 20px;
	}
	
	&__item > label {
		font-size: 18px;
	}
}

@media print {
	.noprint {
		display: none;
	}
}
</style>