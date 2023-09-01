import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
	state: () => ({
		title: 'My Appp',
	}),
})
