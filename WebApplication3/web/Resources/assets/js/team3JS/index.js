/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
   $("#addCourse").click(function(){
       $("#welcomeMSG").hide();
       $("#addUserContent").hide();
       $("#courseContent").show();
       $('#courseTableContainer').jtable({
            title: 'User Table',
            paging: true,
            pageSize: 10,
            sorting: true,
            columnResizable: true, //Actually, no need to set true since it's default
            columnSelectable: true, //Actually, no need to set true since it's default
            saveUserPreferences: true,
            defaultSorting: 'user_id: ASC',
            actions: {
                listAction: 'UserJTAdd.php?action=list',
                createAction: 'UserJTAdd.php?action=create',
                updateAction: 'UserJTAdd.php?action=update',
                deleteAction: 'UserJTAdd.php?action=delete'
            },
            fields: {
                id: {
                    key: true,
                    create: false,
                    edit: false,
                    list: false
                },
                user_id: {
                    title: 'User_ID',
                    visibility: 'fixed'
                            //width: '10%'
                },
                password: {
                    title: 'Password'
                            //width: '10%'
                },
                first_name: {
                    title: 'First&nbsp;Name'
                            //width: '20%'
                },
                last_name: {
                    title: 'Last&nbsp;Name'
                            //width: '20%'
                },
                type: {
                    title: 'Type',
                    options: {'Admin': 'Admin', 'GA': 'GA', 'TA': 'TA'}
                    //width: '20%'
                },
                emailid: {
                    title: 'Email_ID',
                    inputClass: 'validate[required]'
                            //width: '20%'
                }
            }
        });
   });
    $("#addUser").click(function() {
        $("#welcomeMSG").hide();
        $("#courseContent").hide();
        $("#addUserContent").show();
        //$("#test").show();
        //Build the jTable to display the list of users
        $('#commonDialog').show();
        $('#usersTableContainer').jtable({
            title: 'User Table',
            paging: true,
            pageSize: 10,
            sorting: true,
            columnResizable: true, //Actually, no need to set true since it's default
            columnSelectable: true, //Actually, no need to set true since it's default
            saveUserPreferences: true,
            defaultSorting: 'user_id: ASC',
            actions: {
                listAction: 'UserJTAdd.php?action=list',
                createAction: 'UserJTAdd.php?action=create',
                updateAction: 'UserJTAdd.php?action=update',
                deleteAction: 'UserJTAdd.php?action=delete'
            },
            fields: {
                id: {
                    key: true,
                    create: false,
                    edit: false,
                    list: false
                },
                user_id: {
                    title: 'User_ID',
                    visibility: 'fixed'
                            //width: '10%'
                },
                password: {
                    title: 'Password'
                            //width: '10%'
                },
                first_name: {
                    title: 'First&nbsp;Name'
                            //width: '20%'
                },
                last_name: {
                    title: 'Last&nbsp;Name'
                            //width: '20%'
                },
                type: {
                    title: 'Type',
                    options: {'Admin': 'Admin', 'GA': 'GA', 'TA': 'TA'}
                    //width: '20%'
                },
                emailid: {
                    title: 'Email_ID',
                    inputClass: 'validate[required]'
                            //width: '20%'
                }
            }
        });

        //Load person list from server
       // $('#usersTableContainer').jtable('load');

    });
});