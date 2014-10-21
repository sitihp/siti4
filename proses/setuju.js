$(document).ready(function() {

$('#loading_panel').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://sitihp.com/mobile/setuju.php',
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
							'<li data-role="list-divider" data-theme="a" class="listview-custom"><a href="prosessetuju.html?id='+ loaddata.id_survei + '" data-ajax="false">'+ loaddata.id_survei + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">ID Permohonan : '+ loaddata.id_permohonan + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Hasil Survei : '+ loaddata.hasil_survei + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Tanggal Survei : '+ loaddata.tanggal_survei + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Kecamatan : '+ loaddata.kecamatan + '</a></li>',
							'<li data-role="list-divider" data-theme="a" class="listview-custom">Status : '+ loaddata.status + '</a></li> <hr />'
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