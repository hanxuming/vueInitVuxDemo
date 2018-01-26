<template>
	<div>
        <checklist :options="allCheck"  v-model="allCheckValue" @click.native="allchecktest"></checklist>
        <checklist :options="checklist005"  v-model="checklist005Value" @on-change="change"></checklist>
	</div>
</template>
<script type="text/javascript">
	import { Checklist} from 'vux'
	export default{
		data () {
            return {
               allCheck:['全选'],
               checklist005: [ '01', '02', '03' ],
               checklist005Value: [],
               allCheckValue:[]
            }
        },
		components: {
            Checklist
        },
		methods: {
            allchecktest () {
                if( this.allCheckValue.length !== 0 ){
                    this.checklist005Value = [];
                }else{
                    this.checklist005Value = this.checklist005;
                }
            },
            change (val, label) {
                //console.log(val, label);
                //console.log(JSON.stringify(this.checklist005Value));  
            }
        }
	}
</script>
<style scoped>

</style>