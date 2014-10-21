$(document).ready(function() {
				
		$("#proses").click( function(e){
			var pokok_pinjaman					= $("#pokok_pinjaman").val();
			var jangka_waktu					= $("#jangka_waktu").val();
			e.preventDefault();
			
			if(pokok_pinjaman==''){
				$('#required').show();
			}else if(jangka_waktu==''){
				$('#required').show();
			}else{
				$('#formsaran').hide();
				$('#required').hide();
				$('#loading_panel').show();
				KirimSaran();
			}
		});
	
function KirimSaran(){
var idKategori = window.location.search.substring(4);

			var pokok_pinjaman					= $("#pokok_pinjaman").val();
			var jangka_waktu					= $("#jangka_waktu").val();
	
	$.ajax({
				type : 'GET',
				url : "http://sitihp.com/mobile/prosessetuju.php",
				async: true,
				data: {
					pokok_pinjaman: pokok_pinjaman,
					jangka_waktu: jangka_waktu,
					idKategori : idKategori
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var cek = data.result;
						if(cek=='Sukses'){
							$('#loading_panel').hide();
							$('#sukses').show();
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					//window.location.href='survei.html';
				}
		});	
}
}); //Tutup Document Ready