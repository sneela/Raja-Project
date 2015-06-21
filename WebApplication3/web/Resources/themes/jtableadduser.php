<html>
  <head>

   <link href="themes/redmond/jquery-ui-1.8.16.custom.css" rel="stylesheet" type="text/css" />
	<link href="Scripts/jtable/themes/lightcolor/gray/jtable.css" rel="stylesheet" type="text/css" />
	
	<script src="scripts/jquery-1.6.4.min.js" type="text/javascript"></script>
    <script src="scripts/jquery-ui-1.8.16.custom.min.js" type="text/javascript"></script>
    <script src="Scripts/jtable/jquery.jtable.js" type="text/javascript"></script>
	
  </head>
  <body>
 <div class="table-responsive">
  <table class="table table-striped">
	<div id="PeopleTableContainer"></div>
	 </table>
	</div>
 
	
	<script type="text/javascript">

		$(document).ready(function () {

		    //Prepare jTable
			$('#PeopleTableContainer').jtable({
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
						visibility: 'fixed',
	//width: '10%'
					},
					password: {
						title: 'Password',
						
						//width: '10%'
					},
					first_name: {
						title: 'First&nbsp;Name',
						//width: '20%'
					},
					last_name: {
						title: 'Last&nbsp;Name',
						//width: '20%'
					},
					type: {
						title: 'Type',
						options: {'Admin':'Admin','GA':'GA','TA':'TA'},
						//width: '20%'
					},
					emailid: {
						title: 'Email_ID',
						//width: '20%'
					}
				}
			});

			//Load person list from server
			$('#PeopleTableContainer').jtable('load');

		});

	</script>
	
  </body>
</html>
