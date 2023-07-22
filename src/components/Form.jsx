import React from "react";


export const Form = () => {
  return (
    <div className="form-card">
      <div className="form">
        <div className="container">
          <main>
            <br />
            <div className="row g-4">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  placeholder="Nama Perusahaan"
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <input
                  type="number"
                  className="form-control"
                  id="telepon"
                  placeholder="Nomor Telepon"
                />
              </div>
              <div className="mb-3">
                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="3"
                  placeholder="Tentang perusahaan (Max. 200 character)"
                ></textarea>
              </div>
              <div className="col-4">
                <label className="file-input-label" htmlFor="formFileLg">
                  <i className="bi bi-plus-circle h1 text-primary w-100"></i>
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
              <div className="col-8" id="syarat">
                <ol>
                  <li>Format file: .png, .jpg, .jpeg</li>
                  <li>Maksimal ukuran file 200KB</li>
                  <li>Hindari penggunaan logo berwarna putih</li>
                  <li>Minimal lebar 300px</li>
                </ol>
              </div>

              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Profil Perusahaan atau Deck (opsional)"
                />
              </div>

              <div className="col-4">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ width: "100%" }}
                >
                  Upload File
                </button>
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Link Website"
                />
              </div>

              <div className="mx-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Dengan menekan tombol "Daftar", Saya menyetujui syarat dan
                  ketentuan yang berlaku
                </label>
              </div>
            </div>
            <br />
            <div className="d-grid col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                Register
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
