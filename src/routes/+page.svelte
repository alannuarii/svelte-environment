<script>
	let satuan = 'm' + String.fromCharCode(0x00b3);
</script>

<section>
	<h1 class="text-center">DASHBOARD</h1>
	<hr />
	<div class="lb3 mx-2 px-2 py-3 mb-3 mt-4 text-center">
		<div>
			<h4 class="text-primary">SALDO LB3</h4>
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
	<div class="proses mx-2 px-2 py-3 text-center mb-3">
		<div>
			<h4 class="text-primary">TOTAL DEBIT BULANAN</h4>
		</div>
		<div class="d-flex justify-content-evenly align-items-center">
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center justify-content-center">
					Debit Limbah Proses
				</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>{satuan}</span></h5>
				</div>
			</div>
			<div class="card text-bg-secondary">
				<div class="card-header d-flex align-items-center justify-content-center">
					Debit Limbah Domestik
				</div>
				<div class="card-body">
					<h5 class="card-title d-flex flex-column">0 <span>{satuan}</span></h5>
				</div>
			</div>
		</div>
	</div>
	<div class="d-flex justify-content-center">
		<button
			class="btn btn-primary"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasRight"
			aria-controls="offcanvasRight">Menu</button
		>
	</div>
</section>

<style>
	h1 {
		font-weight: 900;
	}
	h4 {
		font-weight: 700;
	}
	button {
		height: 60px;
		width: 150px;
		border-radius: 40px 30px 50px 10px;
	}
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
