$(document).ready(function() {

$('#loading_panel').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://sitihp.com/mobile/permohonansurvei.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
					AmbilData = data.items;
					if(AmbilData=='')
					{
						$('#loading_panel').hide();
						$('#empty').show();
					}
					else
					{						
						$('#loading_panel').hide();
						$('#tampilData').show();
						$.each(AmbilData, function(index, loaddata) {
						$('#sispakList').append(
							'<li data-role="list-divider" data-theme="a" class="listview-custom"><a href="surveiinsert.html?id='+ loaddata.id_permohonan + '" data-ajax="false">'+ loaddata.id_permohonan + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Tanggal Permohonan : '+ loaddata.tanggal_permohonan + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Nama Usaha : '+ loaddata.nama_usaha + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Alamat Usaha : '+ loaddata.alamat_usaha + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Nama Peminjam : '+ loaddata.nama_peminjam + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">HP : '+ loaddata.hp + '</a></li> <hr />'
							);
						});
					}
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#conn_failed').show();
				}
		});	
}	
});