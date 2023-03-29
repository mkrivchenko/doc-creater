<template>

	<nav class="navbar noprint">
		<v-radio-group inline class="noprint" v-model="globalStore.documentVariant">
			<v-radio label="Догазификация" value="gaz"></v-radio>
			<v-radio label="Допник" value="additional"></v-radio>
			<v-radio label="Техническое присоединение" value="connect"></v-radio>
			<v-radio label="Акты" value="act"></v-radio>
			<v-radio label="Заявка" value="claim"></v-radio>
		</v-radio-group>
	</nav>

</template>

<script setup lang="ts">

import { useGlobalStore } from '@/stores/global.store';

const globalStore = useGlobalStore();

</script>

<style lang="less">
@import '@/style/_var-library.less';


.navbar {
	background-color: @main-blue-color;
    color: @light-default-color;

    // font-family: Arial, Helvetica, sans-serif;
    // font-weight: 600;
    // font-size: 14px;

	display: flex;
	align-items: stretch;
	

	height: 50px;
	width: 100%;
	padding: 5px 10px 5px 10px;

	position: fixed;
	
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
}

@media print {
	.noprint {
		display: none;
	}
}
</style>