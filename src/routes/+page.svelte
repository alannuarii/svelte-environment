<script>
	let satuan = 'm' + String.fromCharCode(0x00b3);
</script>

<section>
	<div class="lb3 bg-dark-subtle mx-2 px-2 py-3 mb-3 rounded-4 text-center">
		<div>
			<h4 class="text-dark">Saldo LB3</h4>
		</div>
		<div class="d-flex justify-content-evenly align-items-center">
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center">Sludge</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>Ton</span></h5>
				</div>
			</div>
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center">Oli Bekas</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>Ton</span></h5>
				</div>
			</div>
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center">Majun Bekas</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>Ton</span></h5>
				</div>
			</div>
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center">Filter Bekas</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>Ton</span></h5>
				</div>
			</div>
		</div>
	</div>
	<div class="proses bg-dark-subtle mx-2 px-2 py-3 rounded-4 text-center">
		<div>
			<h4 class="text-dark">Total Debit Bulanan</h4>
		</div>
		<div class="d-flex justify-content-evenly align-items-center">
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center justify-content-center">Debit Limbah Proses</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>{satuan}</span></h5>
				</div>
			</div>
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center justify-content-center">Debit Limbah Domestik</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>{satuan}</span></h5>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.lb3 .card {
		width: 23%;
	}
	.lb3 .card-header {
		font-size: 15px;
		height: 60px;
	}
	.lb3 h5 {
		font-size: 18px;
	}
	.lb3 span {
		font-size: 13px;
	}
	.proses .card {
		width: 45%;
	}
	.proses .card-header {
		font-size: 15px;
		height: 60px;
	}
	.proses h5 {
		font-size: 25px;
	}
	.proses span {
		font-size: 18px;
	}
</style>
