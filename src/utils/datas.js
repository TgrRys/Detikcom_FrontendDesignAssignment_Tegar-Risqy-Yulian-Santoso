import logo from "../assets/logo/logo.svg";
import logo2 from "../assets/logo/logo2.svg";

// ** Import Background
import backgroundLarge from "../assets/background/background-lg.svg";
import backgroundSmall from "../assets/background/background-sm.svg";
import backgroundMechanism from "../assets/background/background-mechanism.svg";
import about from "../assets/background/about.svg";
import backgroundRegister from "../assets/background/background-register.svg";
import backgroundMechanismSmall from "../assets/background/backround-mechanism-sm.svg";

// ** Import Icon
import twitter from "../assets/icons/twitter.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import facebook from "../assets/icons/facebook.svg";
import play from "../assets/icons/play.svg";
import registrasi from "../assets/icons/registrasi.svg";
import seleksi from "../assets/icons/seleksi.svg";
import pengumuman from "../assets/icons/pengumuman.svg";
import twitterOutline from "../assets/icons/twitter-outline.svg";
import instagramOutline from "../assets/icons/instagram-outline.svg";
import facebookOutline from "../assets/icons/facebook-outline.svg";
import plus from "../assets/icons/plus.svg";

// ** Import Brand
import fiveHundred from "../assets/brands-logo/500.svg";
import alpha from "../assets/brands-logo/alpha.svg";
import insignia from "../assets/brands-logo/insignia.svg";
import sequoia from "../assets/brands-logo/sequoia.svg";
import signovate from "../assets/brands-logo/signovate.svg";
import wafe from "../assets/brands-logo/wave.svg";
import gfc from "../assets/brands-logo/gfc.svg";
import golden from "../assets/brands-logo/golden.svg";

// ** Import Blog
import post1 from "../assets/blog/post1.svg";
import post2 from "../assets/blog/post2.svg";
import post3 from "../assets/blog/post3.svg";
import post4 from "../assets/blog/post4.svg";
import post5 from "../assets/blog/post5.svg";
import post6 from "../assets/blog/post6.svg";

const sideItems = [
  { name: "About", scrollTo: "about" },
  { name: "Mechanism", scrollTo: "mechanism" },
  { name: "Latest Update", scrollTo: "latest-update" },
];


// const backgroundImages = [
//     {
//         background: backgroundLarge,
//     },
//     {
//         background: backgroundSmall,
//     },
//     {
//         background: backgroundMechanism,
//     },
//     {
//         background: about,
//     },
//     {
//         background: backgroundRegister,
//     },
//     {
//         background: backgroundMechanismSmall,
//     },
// ];

const mechanismItems = [
    {
        title: "Registrasi",
        date: "1 - 30 Januari 2023",
        icon: registrasi,
        steps: [
            "Calon peserta diminta untuk mengisi formulir pendaftaran online yang berisi informasi pribadi, kontak, dan rincian tim pada link berikut",
            "Selain itu, peserta juga diharapkan mengunggah ringkasan rencana bisnis mereka yang mencakup visi, misi, strategi, dan analisis pasar",
        ],
    },
    {
        title: "Seleksi Peserta",
        date: "1 - 7 Februari 2023",
        icon: seleksi,
        steps: [
            "Tim seleksi akan meninjau setiap pendaftaran dan mengevaluasi kualitas dan kelayakan bisnis plan yang diajukan",
            "Kriteria evaluasi dapat mencakup inovasi, potensi pertumbuhan, kelayakan keuangan, dan kejelasan presentasi",
            " Peserta yang memenuhi persyaratan seleksi akan dipilih sebagai finalis dan berhak melanjutkan ke tahap berikutnya",
        ],
    },
    {
        title: "Pengumuman Peserta Terpilih",
        icon: pengumuman,
        date: "8 Februari 2023",
        steps: [
            "Pengumuman finalis akan dilakukan melalui email",
            "Finalis akan diinformasikan tentang jadwal presentasi dan persiapan yang diperlukan",
            "Pada acara pengumuman pemenang, setiap finalis akan mempresentasikan rencana bisnis mereka di hadapan panel juri",

            "Setelah presentasi, panel juri akan melakukan evaluasi dan mengumumkan pemenang kompetisi business plan",
        ],
    },
];

const brandsImages = [
    { image: alpha, name: "alpha" },
    { image: fiveHundred, name: "fiveHundred" },
    { image: insignia, name: "insignia" },
    { image: sequoia, name: "sequoia" },
    { image: signovate, name: "signovate" },
    { image: wafe, name: "wave" },
    { image: gfc, name: "gfc" },
    { image: golden, name: "golden" },
];

const aggregatorItems = [
    {
        image: post1,
        title:
            "Alpha JWC Ventures Suntikkan Dana Segar kepada OnlinePajak dan Stoqo",
    },
    {
        image: post2,
        title:
            "Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures",
    },
    {
        image: post3,
        title:
            "Angel Investor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya",
    },
    {
        image: post4,
        title:
            "Crowe Indonesia Gelar Diskusi terkait Valuasi Startup & Laporan ESG",
    },
    {
        image: post5,
        title: "Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota",
    },

    {
        image: post6,
        title: "Startup Pertanian RI Dapat Pendanaan Awal, Totalnya Rp 90 M",
    },
];

export {
    logo,
    logo2,
    twitter,
    whatsapp,
    facebook,
    play,
    twitterOutline,
    instagramOutline,
    facebookOutline,
    plus,
    backgroundLarge,
    backgroundSmall,
    backgroundMechanism,
    about,
    backgroundRegister,
    backgroundMechanismSmall,
    mechanismItems,
    brandsImages,
    aggregatorItems,
    sideItems,
};