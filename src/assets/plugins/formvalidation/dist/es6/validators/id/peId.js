export default function t(t){if(!/^\d{8}[0-9A-Z]*$/.test(t)){return{meta:{},valid:false}}if(t.length===8){return{meta:{},valid:true}}const e=[3,2,7,6,5,4,3,2];let r=0;for(let a=0;a<8;a++){r+=e[a]*parseInt(t.charAt(a),10)}const a=r%11;const n=[6,5,4,3,2,1,1,0,9,8,7][a];const c="KJIHGFEDCBA".charAt(a);return{meta:{},valid:t.charAt(8)===`${n}`||t.charAt(8)===c}}