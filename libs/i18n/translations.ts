export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'home',
      about: 'About',
      projects: 'Projects',
      blogs: 'Blogs',
      menu: 'Menu'
    },
    
    // Home section
    home: {
      name: 'Ahza Radithya Dwicahyo 📸',
      role: 'FullStack Developer',
      description: "I'm a fullstack developer specializing in building scalable, responsive, and user-friendly web applications. I focus on writing clean, efficient, and maintainable code across both the frontend and backend."
    },

    // About section
    about: {
      title: 'About',
      bio1: 'Ahza was born in Bekasi, Indonesia. a 17 years old web developer 🧑‍💻. Being exposed to the creative arts and sciences at an early age, this has always guided him on the path to learn something new and be curious of how things work, a Full Stack developer who loves to create new things',
      bio2: 'Here are some of the technologies I have worked with:',
      technologies: ['React', 'Next.js', 'React Native', 'Express', 'MongoDB', 'PostgreSQL']
    },

    // Projects section
    projects: {
      title: 'Projects',
      showMore: 'Show More',
      showLess: 'Show Less',
      preview: 'Preview',
      items: [
        {
          label: 'Personal Website',
          summary: 'A digital space that showcases a person\'s best work, blog, backgrounds, etc.',
          tags: ['NextJS']
        },
        {
          label: 'Inventory App',
          summary: 'Inventory Management App of my school for handling data in real time.',
          tags: ['NextJS', 'Supabase']
        },
        {
          label: 'Esemka Laundry',
          summary: 'A multi platform monorepo app that contains frontend, backend, and multiplatform apps in single codebase',
          tags: ['ReactJS', 'HonoJS', 'Tauri']
        }
      ]
    },

    // Blog section
    blog: {
      title: 'Latest Blogs',
      viewMore: 'view more',
      noPosts: 'The author has no posts yet',
      minRead: 'min read',
      endOfBlog: 'Its the End of My Blog',
      endOfPost: 'Its the End of',
      endOfTag: 'Its the End of',
      blogTopic: 'Blog topic:'
    },

    // Footer
    footer: {
      copyright: 'All right reserved.'
    },

    // 404 Page
    notFound: {
      title: '404',
      message: 'Oops! There is no such page here...',
      backHome: 'Back to Home'
    },

    // Blog post
    blogPost: {
      writings: 'writings'
    }
  },
  
  id: {
    // Navigation
    nav: {
      home: 'beranda',
      about: 'Tentang',
      projects: 'Proyek',
      blogs: 'Blog',
      menu: 'Menu'
    },
    
    // Home section
    home: {
      name: 'Ahza Radithya Dwicahyo 📸',
      role: 'Pengembang FullStack',
      description: 'Saya adalah seorang pengembang fullstack yang mengkhususkan diri dalam membangun aplikasi web yang skalabel, responsif, dan ramah pengguna. Saya fokus pada penulisan kode yang bersih, efisien, dan mudah dipelihara di frontend maupun backend.'
    },

    // About section
    about: {
      title: 'Tentang',
      bio1: 'Ahza lahir di Bekasi, Indonesia. Seorang pengembang web berusia 17 tahun 🧑‍💻. Terpapar dengan seni kreatif dan sains sejak usia dini, hal ini selalu membimbingnya untuk belajar hal baru dan penasaran bagaimana sesuatu bekerja, seorang Full Stack developer yang suka menciptakan hal-hal baru',
      bio2: 'Berikut adalah beberapa teknologi yang pernah saya gunakan:',
      technologies: ['React', 'Next.js', 'React Native', 'Express', 'MongoDB', 'PostgreSQL']
    },

    // Projects section
    projects: {
      title: 'Proyek',
      showMore: 'Tampilkan Lebih Banyak',
      showLess: 'Tampilkan Lebih Sedikit',
      preview: 'Lihat',
      items: [
        {
          label: 'Website Pribadi',
          summary: 'Ruang digital yang menampilkan karya terbaik seseorang, blog, latar belakang, dll.',
          tags: ['NextJS']
        },
        {
          label: 'Aplikasi Inventaris',
          summary: 'Aplikasi Manajemen Inventaris sekolah saya untuk menangani data secara real time.',
          tags: ['NextJS', 'Supabase']
        },
        {
          label: 'Esemka Laundry',
          summary: 'Aplikasi monorepo multi platform yang berisi frontend, backend, dan aplikasi multiplatform dalam satu codebase',
          tags: ['ReactJS', 'HonoJS', 'Tauri']
        }
      ]
    },

    // Blog section
    blog: {
      title: 'Blog Terbaru',
      viewMore: 'lihat lebih banyak',
      noPosts: 'Penulis belum memiliki postingan',
      minRead: 'menit baca',
      endOfBlog: 'Ini Akhir dari Blog Saya',
      endOfPost: 'Ini Akhir dari',
      endOfTag: 'Ini Akhir dari Blog',
      blogTopic: 'Topik blog:'
    },

    // Footer
    footer: {
      copyright: 'Semua hak dilindungi.'
    },

    // 404 Page
    notFound: {
      title: '404',
      message: 'Ups! Tidak ada halaman seperti itu di sini...',
      backHome: 'Kembali ke Beranda'
    },

    // Blog post
    blogPost: {
      writings: 'tulisan'
    }
  }
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations.en