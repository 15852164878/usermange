import { reactive, ref } from "vue";
 interface User {
  id: number;
  username: string;
  password: string;
  roletype:number;
  purviewid:number;
  loginproviderid:number;
  nickname:string;
  name:string;
  surname:string;
  sex:boolean;
  headsculpture:string;
  phonenumber:number;
  email:string;
  birthtime:Date;
  createiontime:Date;
  isdeleted:boolean;
  isactive:boolean;
  }
  
  export const tableRowClassName = ({
    row,
    rowIndex,
  }: {
    row: User
    rowIndex: number
  }) => {
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }
  
  export  const tableData: User[] =reactive([])

  export const formInline = reactive({
  })


 