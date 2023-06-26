import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
          <Hero />
          <section class="bg-light py-5">
            <div class="container px-5">
              <div class="row gx-5 justify-content-center">
                <div class="col-xxl-8">
                  <div class="text-center my-5">
                    <h2 class="display-5 fw-bolder">
                      <span class="text-gradient d-inline">Tentang Saya</span>
                    </h2>
                    <div class="row mb-3 text-start">
                      <div class="col-sm-6 py-2">
                        <h6>
                          Nama:{" "}
                          <span class="text-secondary">Virgil Steven Weol</span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          Tempat, Tanggal Lahir:{" "}
                          <span class="text-secondary">27 Februari 2002</span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          Jenis Kelamin:{" "}
                          <span class="text-secondary">Laki-Laki</span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          Pendidikan Terakhir:{" "}
                          <span class="text-secondary">SMA Sederajat</span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          No. Handphone:{" "}
                          <span class="text-secondary">+62 812 4161 7892</span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          Email:{" "}
                          <span class="text-secondary">
                            virgilweol25@gmail.com
                          </span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          Alamat:{" "}
                          <span class="text-secondary">
                            Komp. TNI AL-Hamadi Jayapura, Papua
                          </span>
                        </h6>
                      </div>
                      <div class="col-sm-6 py-2">
                        <h6>
                          Status:{" "}
                          <span class="text-secondary">Masih Jomblo</span>
                        </h6>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center fs-2 gap-4">
                      <a
                        class="text-gradient"
                        href="https://instagram.com/jill.ss_?igshid=ZDc4ODBmNjlmNQ=="
                      >
                        <i class="fa-brands fa-instagram" />
                      </a>
                      <a
                        class="text-gradient"
                        href="https://www.facebook.com/virgil.weol.7?mibextid=ZbWKwL"
                      >
                        <i class="fa-brands fa-facebook" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
