(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{CnNd:function(t,n,e){"use strict";e.r(n),e.d(n,"TeenpattiModule",(function(){return v}));var o=e("ofXK"),c=e("3Pt+"),a=e("tyNb"),g=e("ZOsW"),l=e("i2NW"),r=e("FUS3"),i=e("hVeP"),_=e("fXoL"),p=e("Jg6B"),s=e("FnMX"),b=e("lGQG"),C=e("7ch9"),d=e("5eHb"),M=e("OlR4");function O(t,n){if(1&t&&(_.Xb(0,"ng-option",13),_.Jc(1),_.Wb()),2&t){const t=n.$implicit;_.oc("value",t.userId),_.Fb(1),_.Lc(" ",t.userName," ")}}function P(t,n){if(1&t){const t=_.Yb();_.Xb(0,"li"),_.Xb(1,"label"),_.Jc(2,"User List:"),_.Wb(),_.Xb(3,"ng-select",10),_.ec("ngModelChange",(function(n){return _.zc(t),_.gc().selectedUser=n})),_.Xb(4,"ng-option",11),_.Jc(5,"Select User"),_.Wb(),_.Hc(6,O,2,2,"ng-option",12),_.Wb(),_.Wb()}if(2&t){const t=_.gc();_.Fb(3),_.nc("ngModel",t.selectedUser),_.Fb(3),_.nc("ngForOf",t.usersList)}}function x(t,n){if(1&t){const t=_.Yb();_.Xb(0,"tr"),_.Xb(1,"td"),_.Xb(2,"input",20),_.ec("ngModelChange",(function(e){_.zc(t);const o=n.$implicit;return _.gc(3).teenpattiSelectMap[o.tableName]=e})),_.Wb(),_.Wb(),_.Xb(3,"td"),_.Jc(4),_.Wb(),_.Wb()}if(2&t){const t=n.$implicit,e=_.gc(3);_.Fb(2),_.nc("ngModel",e.teenpattiSelectMap[t.tableName]),_.Fb(2),_.Lc(" ",t.tableName," ")}}function h(t,n){if(1&t&&(_.Xb(0,"tbody"),_.Hc(1,x,5,2,"tr",19),_.Wb()),2&t){const t=_.gc(2);_.Fb(1),_.nc("ngForOf",t.teenpattiLists)}}function u(t,n){if(1&t){const t=_.Yb();_.Xb(0,"tr"),_.Xb(1,"td"),_.Xb(2,"input",20),_.ec("ngModelChange",(function(e){_.zc(t);const o=n.$implicit;return _.gc(3).teenpattiSelectMap[o.tableName]=e})),_.Wb(),_.Wb(),_.Xb(3,"td"),_.Jc(4),_.Wb(),_.Wb()}if(2&t){const t=n.$implicit,e=_.gc(3);_.Fb(2),_.nc("ngModel",e.teenpattiSelectMap[t.tableName]),_.Fb(2),_.Lc(" ",t.tableName," ")}}function m(t,n){if(1&t&&(_.Xb(0,"tbody"),_.Hc(1,u,5,2,"tr",19),_.Wb()),2&t){const t=_.gc(2);_.Fb(1),_.nc("ngForOf",t.teenpattiLists)}}function f(t,n){if(1&t){const t=_.Yb();_.Xb(0,"table",14),_.Xb(1,"thead"),_.Xb(2,"tr",15),_.Xb(3,"th",16),_.Xb(4,"div",17),_.Xb(5,"input",18),_.ec("click",(function(n){return _.zc(t),_.gc().toggleSelectAll(n.target.checked)})),_.Wb(),_.Wb(),_.Wb(),_.Xb(6,"th"),_.Jc(7,"Table Name"),_.Wb(),_.Wb(),_.Wb(),_.Hc(8,h,2,1,"tbody",5),_.Hc(9,m,2,1,"tbody",5),_.Wb()}if(2&t){const t=_.gc();_.Fb(8),_.nc("ngIf",t.currentUser.userType===t.common.vrnlUserType),_.Fb(1),_.nc("ngIf",t.currentUser.userType===t.whitelabelUserType)}}const y=[{path:"",component:(()=>{class t{constructor(t,n,e,o,c,a){this.teenpattiService=t,this.usersService=n,this.auth=e,this.loadingService=o,this.toastr=c,this.common=a,this.selectedTabIndex=0,this.selectedUser="",this.teenpattiSelectMap={}}ngOnInit(){this.getTeenpattiList(),this.listUser(),this.currentUser=this.auth.currentUser,this.common.hierarchyMap$.subscribe(t=>{this.whitelabelUserType=this.common.whitelabelUserType})}getTeenpattiList(){this.teenpattiLists=[],this.loadingService.setLoading(!0),this.teenpattiService.listTeenpatti().subscribe(t=>{t&&0===t.errorCode&&(t.result.forEach(t=>this.teenpattiSelectMap[t.tableName]=!1),console.log(this.teenpattiSelectMap),this.teenpattiLists=t.result,this.loadingService.setLoading(!1))})}listUser(){this.usersService.listUser(this.auth.currentUser.userId,this.auth.currentUser.userType+1).subscribe(t=>{0===t.errorCode&&(this.usersList=t.result[0].users,this.loadingService.setLoading(!1))})}selectTab(t){this.selectedTabIndex=t}onActiveCasino(){if(this.currentUser.userType===this.common.vrnlUserType&&this.selectedUser&&Object.values(this.teenpattiSelectMap).filter(t=>t).length){const t={userId:this.selectedUser,tables:Object.keys(this.teenpattiSelectMap).filter(t=>this.teenpattiSelectMap[t]).reduce((t,n)=>[...t,n],[])};console.log(t,Object.values(this.teenpattiSelectMap).filter(t=>t).length),this.teenpattiService.activeCasino(t).subscribe(t=>{0===t.errorCode?(this.toastr.success("Tables Updated"),this.loadingService.setLoading(!1)):this.toastr.error(t.errorDescription)})}else if(this.currentUser.userType===this.common.whitelabelUserType&&Object.values(this.teenpattiSelectMap).filter(t=>t).length){const t={tables:Object.keys(this.teenpattiSelectMap).filter(t=>this.teenpattiSelectMap[t]).reduce((t,n)=>[...t,n],[])};console.log(t,t.tables.length),this.teenpattiService.activeCasino(t).subscribe(t=>{0===t.errorCode?(this.toastr.success("Tables Updated"),this.loadingService.setLoading(!1)):this.toastr.error(t.errorDescription)})}else this.toastr.error(this.currentUser.userType===this.common.vrnlUserType?"Please select user and at least one table":"Please select atleast one table")}toggleSelectAll(t){Object.values(this.teenpattiSelectMap).every(t=>t)?Object.keys(this.teenpattiSelectMap).forEach(t=>this.teenpattiSelectMap[t]=!1):Object.keys(this.teenpattiSelectMap).forEach(t=>this.teenpattiSelectMap[t]=!0)}}return t.\u0275fac=function(n){return new(n||t)(_.Rb(p.a),_.Rb(s.a),_.Rb(b.a),_.Rb(C.a),_.Rb(d.b),_.Rb(M.a))},t.\u0275cmp=_.Lb({type:t,selectors:[["app-teenpatti"]],decls:14,vars:4,consts:[[1,"main_wrap"],[1,"report-tab-wrap",2,"display","block"],["id","reportType_sportsBook",1,"report-tab","select",3,"click"],[1,"function-wrap"],[1,"input-list"],[4,"ngIf"],[1,"spacer"],[1,"import-button"],[1,"btn-send",3,"click"],["id","table_DL","class","table01 table-pt",4,"ngIf"],["name","sortCondition","id","sortCondition",3,"ngModel","ngModelChange"],["value","","selected","selected"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["id","table_DL",1,"table01","table-pt"],[1,"ng-table-sort-header"],["width","3%"],["ng-if","template","ng-include","template"],["type","checkbox","id","select_all",3,"click"],[4,"ngFor","ngForOf"],["type","checkbox",3,"ngModel","ngModelChange"]],template:function(t,n){1&t&&(_.Xb(0,"div",0),_.Xb(1,"ul",1),_.Xb(2,"li",2),_.ec("click",(function(){return n.selectTab(0)})),_.Jc(3," Casino List "),_.Wb(),_.Wb(),_.Xb(4,"div",3),_.Xb(5,"ul",4),_.Hc(6,P,7,2,"li",5),_.Xb(7,"li",6),_.Jc(8,"\xa0\xa0"),_.Wb(),_.Xb(9,"li",7),_.Xb(10,"button",8),_.ec("click",(function(){return n.onActiveCasino()})),_.Jc(11,"Import"),_.Wb(),_.Wb(),_.Wb(),_.Wb(),_.Wb(),_.Xb(12,"div",0),_.Hc(13,f,10,2,"table",9),_.Wb()),2&t&&(_.Fb(2),_.Jb("select",0===n.selectedTabIndex),_.Fb(4),_.nc("ngIf",n.currentUser.userType===n.common.vrnlUserType),_.Fb(7),_.nc("ngIf",0===n.selectedTabIndex))},directives:[o.m,g.a,c.p,c.r,g.c,o.l,c.a],styles:['.table01[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]{width:100%;background-color:#fff;border-collapse:collapse;border-bottom:1px solid #7e97a7;margin-bottom:15px;text-align:right}.table01[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#243a48;background-color:#e4e4e4;border:1px solid #7e97a7;border-width:1px 0;padding:8px 10px}.table01[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative;border-top:1px solid #eee;padding:8px 10px;vertical-align:middle}.table01[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.table01[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}.table01[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:26px;height:26px;margin-left:3px}.table01[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]:hover, .table-s[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]:hover, .table_one[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]:hover{background-position:-32px -1540px}.table01[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover, .table-s[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover, .table_one[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover{background-position:-32px -1449px}.table01[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .p_l[_ngcontent-%COMP%]:hover, .table-s[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .p_l[_ngcontent-%COMP%]:hover, .table_one[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .p_l[_ngcontent-%COMP%]:hover{background-position:-32px -1397px}.table01[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .betting_history[_ngcontent-%COMP%]:hover, .table-s[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .betting_history[_ngcontent-%COMP%]:hover, .table_one[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .betting_history[_ngcontent-%COMP%]:hover{background-position:-32px -282px}.table01[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{background-color:#3b5160;border-bottom:1px solid #7e97a7;color:#fff;line-height:1;font-weight:700;padding:0 10px}.table01[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{width:22px;margin-right:7px;font-weight:700}.table01[_ngcontent-%COMP%]   .border-l[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .border-l[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .border-l[_ngcontent-%COMP%]{border-left:1px solid #7e97a7}.table01[_ngcontent-%COMP%]   .expand-close[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .expand-open[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .expand-close[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .expand-open[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .expand-close[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .expand-open[_ngcontent-%COMP%]{float:left;height:15px;padding-right:0;margin-right:4px}.table01[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0}.expand-close[_ngcontent-%COMP%], .expand-open[_ngcontent-%COMP%]{text-decoration:none;color:#000;padding-right:20px;background-position:100% -136px}.expand[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:0}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]{background-color:#f2f4f7}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .sum-pl[_ngcontent-%COMP%]{background-color:#d9e4ec;border-top:1px solid #7e97a7}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .sum-pl[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{padding:5px 0}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .sum-pl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{width:82%;padding:0 10px 5px;color:#243a48}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .sum-pl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{padding:0 10px 5px}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .sum-pl[_ngcontent-%COMP%]   .net_total[_ngcontent-%COMP%]{padding-top:5px;border-top:1px dotted #7e97a7}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .sum-pl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.expand[_ngcontent-%COMP%]   .table-commission[_ngcontent-%COMP%]{width:75%;margin-left:23%;border-right:1px solid #7e97a7}.table-pnl[_ngcontent-%COMP%]   .expand-close[_ngcontent-%COMP%], .table-pnl[_ngcontent-%COMP%]   .expand-open[_ngcontent-%COMP%]{display:block;width:inherit;padding-right:20px;float:none}.expand-close[_ngcontent-%COMP%]{background-position:100% -136px}.expand-open[_ngcontent-%COMP%]{background-position:100% -151px}.expand-arrow-R[_ngcontent-%COMP%]{left:98%;margin-top:-1px;background-position:-17px -118px}.expand-arrow[_ngcontent-%COMP%], .expand-arrow-R[_ngcontent-%COMP%]{position:absolute;height:9px;width:10px}.expand-arrow[_ngcontent-%COMP%]{left:15%;margin-left:-10px;background-position:-17px -127px}.calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .add_member[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .btn_expand[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .total_all[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .add_member[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .btn_expand[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .total_all[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .add_member[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .btn_expand[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .total_all[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%], .total_all[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%], .total_all[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%], .total_all[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%]{text-decoration:none}.fromto[_ngcontent-%COMP%]{margin:0 5px;background-position:-20px -182px;height:8px;width:7px;vertical-align:middle}.over-wrap[_ngcontent-%COMP%]   .table01[_ngcontent-%COMP%]:last-of-type, .over-wrap[_ngcontent-%COMP%]   .table-s[_ngcontent-%COMP%]:last-of-type, .over-wrap[_ngcontent-%COMP%]   .table_one[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}.calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .calendarTable_inputBox[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .marquee-pop[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .total_all[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .add_member[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .btn_expand[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .marquee-pop[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   .calendarTable_inputBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .total_all[_ngcontent-%COMP%]   .btn_replay[_ngcontent-%COMP%]{margin:0}.DW-amount[_ngcontent-%COMP%]{border-left:1px solid #7e97a7}.DW-amount[_ngcontent-%COMP%]   .member_select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .DW-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .DW-amount[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .member_select[_ngcontent-%COMP%]   .DW-amount[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:calc(100% - 63px - 47px - 14px);font-size:13px;font-weight:700;margin:0 7px}.grand-total[_ngcontent-%COMP%], .total[_ngcontent-%COMP%]{font-weight:700;color:#243a48}.grand-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top-color:#7e97a7;border-bottom:1px solid #7e97a7}.table-pt[_ngcontent-%COMP%]   .expand.first[_ngcontent-%COMP%]{box-shadow:inset 0 2px 0 rgba(0,0,0,.1)}.table-pt[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-color:#e2e8ed}.table-pt[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:14px}.table-pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:8px 5px}.table-pt[_ngcontent-%COMP%]   .expand-close[_ngcontent-%COMP%], .table-pt[_ngcontent-%COMP%]   .expand-open[_ngcontent-%COMP%]{width:15px;padding-left:0}.table-pt[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:0}@media screen and (-webkit-min-device-pixel-ratio:0){.table-pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 3px}}.expand[_ngcontent-%COMP%]{background-color:#e2e8ed}.expand[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{position:relative;border-top-color:#7e97a7;border-bottom:1px solid #7e97a7}.expand.expand_1[_ngcontent-%COMP%]{background-color:#ebebeb}.expand.expand_1[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:6px!important}.expand.expand_2[_ngcontent-%COMP%]{background-color:#e9e9e9}.expand.expand_2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:12px!important}.expand.expand_3[_ngcontent-%COMP%]{background-color:#e6e6e6}.expand.expand_3[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:18px!important}.expand.expand_4[_ngcontent-%COMP%]{background-color:#e4e4e4}.expand.expand_4[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:24px!important}.expand.expand_5[_ngcontent-%COMP%]{background-color:#e1e1e1}.expand.expand_5[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:30px!important}.expand.expand_6[_ngcontent-%COMP%]{background-color:#dfdfdf}.expand.expand_6[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:36px!important}.expand.expand_7[_ngcontent-%COMP%]{background-color:#dcdcdc}.expand.expand_7[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:42px!important}.expand.expand_8[_ngcontent-%COMP%]{background-color:#dadada}.expand.expand_8[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:48px!important}.expand.expand_9[_ngcontent-%COMP%]{background-color:#d7d7d7}.expand.expand_9[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:54px!important}.expand.expand_10[_ngcontent-%COMP%]{background-color:#d5d5d5}.expand.expand_10[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:60px!important}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:85%;border-left:1px solid #7e97a7;border-bottom-width:0;margin-left:15%}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:initial;border-top-width:0}.expand[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-width:0;padding:8px 10px}.expand-balance[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:8px 10px}.expand[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .slip-head[_ngcontent-%COMP%], .table01[_ngcontent-%COMP%]   .border-t[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .border-t[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .border-t[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{box-shadow:inset 0 2px 0 rgba(0,0,0,.1)}.expand-arrow[_ngcontent-%COMP%]{visibility:visible}.table01[_ngcontent-%COMP%]   .btn-recall[_ngcontent-%COMP%], .table-s[_ngcontent-%COMP%]   .btn-recall[_ngcontent-%COMP%], .table_one[_ngcontent-%COMP%]   .btn-recall[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;width:60px;font-size:11px;line-height:2;text-decoration:none;padding:0}.report-tab-wrap[_ngcontent-%COMP%]{position:relative;margin-top:16px;list-style-type:none}.report-tab-wrap[_ngcontent-%COMP%]   .report-tab[_ngcontent-%COMP%]{display:inline-block;padding:5px 24px 9px;margin-right:2px;background-color:#fff;border:1px solid #3b5160;border-radius:3px 3px 0 0;color:#3b5160;font-size:15px;font-weight:700;cursor:pointer}.report-tab-wrap[_ngcontent-%COMP%]   .report-tab.select[_ngcontent-%COMP%]{background-color:#3b5160;color:#fff}.report-tab-wrap[_ngcontent-%COMP%]   .report-tab.select[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;bottom:0;left:0;width:100%;height:4px;background-color:#3b5160}.table-pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:4px 3px}.table-pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.1);text-align:center}.table-pt[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:unset}.expand[_ngcontent-%COMP%]   .market[_ngcontent-%COMP%]{display:flex;align-items:center;padding:2px 4px}.expand[_ngcontent-%COMP%]   .market[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid rgba(0,0,0,.2)}input[type=checkbox][_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#e4e4e4}tbody.header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2)}.markets[_ngcontent-%COMP%]{display:flex;flex-flow:column}.sub_market[_ngcontent-%COMP%]{margin-left:20px}th.header[_ngcontent-%COMP%]{position:relative}th.header[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{text-decoration:none;position:absolute;right:10px;top:50%;transform:translateY(-50%);color:inherit;border:0;background:transparent;outline:none;cursor:pointer}th.header[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.5em}  .grid{display:grid;align-items:center;gap:8px}  .grid-col-2{grid-template-columns:1fr 1fr}  .grid-col-1{grid-template-columns:1fr}  .modal-content .cal-input,   .modal-content select{width:97%}  .modal-footer{margin-top:8px;display:flex;justify-content:center}  .form-group{padding:4px 0}#sortCondition[_ngcontent-%COMP%]{width:150px;margin-left:10px}']}),t})()}];let v=(()=>{class t{}return t.\u0275mod=_.Pb({type:t}),t.\u0275inj=_.Ob({factory:function(n){return new(n||t)},imports:[[o.c,a.f.forChild(y),c.j,i.a,l.b,g.b,r.a]]}),t})()},FnMX:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("2Vo4"),c=e("AytR"),a=e("fXoL"),g=e("tk/3");const l="sharing_map";let r=(()=>{class t{constructor(t){this.httpClient=t,this.baseUrl=c.a.baseUrl,this._sharingSub=new o.a(null),this.sharing$=this._sharingSub.asObservable();let n=localStorage.getItem(l);n&&this._sharingSub.next(JSON.parse(n))}listHierarchy(){return this.httpClient.get(this.baseUrl+"/listHierarchy")}listUserLog(t){return this.httpClient.get(`${this.baseUrl}/logActivity/${t}`)}getUser(t){return this.httpClient.get(`${this.baseUrl}/getUser/${t}`)}listUser(t,n){return this.httpClient.get(n?`${this.baseUrl}/listUsers/${t}/${n}`:`${this.baseUrl}/listUsers/${t}`)}updateStatus(t,n){return this.httpClient.post(`${this.baseUrl}/updateUser/${t}`,n)}registration(t){return this.httpClient.post(this.baseUrl+"/registration",t)}logCreditRef(t){return this.httpClient.get(`${this.baseUrl}/logCreditRef/${t}`)}changePassword(t){return this.httpClient.post(`${this.baseUrl}/updateUser/${t.userId}`,t)}changeExposureLimit(t){return this.httpClient.post(`${this.baseUrl}/updateUser/${t.userId}`,t)}updateShare(t){return this.httpClient.post(`${this.baseUrl}/updateUser/${t.userId}`,t)}getlog(t){return this.httpClient.get(`${this.baseUrl}/logTransaction/${t}`)}logActivity(t){return this.httpClient.get(`${this.baseUrl}/logActivity/${t}`)}betHistory(t,n,e){return this.httpClient.get(`${this.baseUrl}/betsHistory?from=${t}&to=${n}&userId=${e}`)}profitLoss(t,n,e){return this.httpClient.get(`${this.baseUrl}/profitLoss?from=${t}&to=${n}&userId=${e}`)}setSharing(t){this._sharingSub.next(t),localStorage.setItem(l,JSON.stringify(t))}allowUnmatchedBet(t,n){return this.httpClient.get(n?`/unmatchedBets/${t}/1`:`/unmatchedBets/${t}/0`)}}return t.\u0275fac=function(n){return new(n||t)(a.bc(g.b))},t.\u0275prov=a.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);