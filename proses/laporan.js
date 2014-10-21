$(document).ready(function() {
				
		$("#proses").click( function(e){
			var dari_tanggal					= $("#dari_tanggal").val();
			var sampai_tanggal					= $("#sampai_tanggal").val();
			e.preventDefault();
			
			if(dari_tanggal==''){
				$('#required').show();
			}else if(sampai_tanggal==''){
				$('#required').show();
			}else{
				$('#formsaran').hide();
				$('#required').hide();
				$('#loading_panel').show();
				KirimSaran();
			}
		});
	
	
		

function KirimSaran(){
var AmbilData;
			var dari_tanggal					= $("#dari_tanggal").val();
			var sampai_tanggal					= $("#sampai_tanggal").val();
	
	$.ajax({
				type : 'GET',
				url : "http://sitihp.com/mobile/laporan.php",
				async: true,
				data: {
					dari_tanggal: dari_tanggal,
					sampai_tanggal: sampai_tanggal
				},
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						AmbilData = data.items;
							$('#loading_panel').hide();
							$('#tampilData').show();
							$.each(AmbilData, function(index, loaddata) {
							$('#sispakList').append(
								'<li><div style="white-space:normal">'+
												'Kecamatan : <b>'+ loaddata.kecamatan +'</b><br/>'+
												'Id Kontrak : '+ loaddata.id_kontrak +'<br/>'+
												'Nama Peminjam : '+ loaddata.nama_peminjam +'<br/>'+
												'Alamat Tinggal : '+ loaddata.alamat_tinggal +'<br/>'+
												'Tanggal Kontrak : '+ loaddata.tanggal_kontrak +'<br/>'+
												'Pokok Pinjaman : '+ loaddata.pokok_pinjaman +'<br/>'+
												'Bunga : '+ loaddata.bunga +'<br/>'+
												'Pokok Pembayaran : '+ loaddata.pokok_pembayaran +'<br/>'+
												'Bunga Pembayaran : '+ loaddata.bunga_pembayaran +'<br/><hr />'+
												'</div></li>'
								);
							});
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					window.location.href='laporan.html';
				}
		});	
}
});