import { Head } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowUpRight,
    Code2,
    ExternalLink,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
    {
        number: "01",
        category: "Class website",
        title: "Website Kelas XI RPL",
        description:
            "A class profile website for XI RPL at SMK PGRI 2 Ponorogo, featuring students, teachers, and class activities.",
        technologies: ["HTML", "CSS", "JS"],
        href: "https://11rplsterida.vercel.app/",
        visual: "class",
        visualLabel: "11 RPL",
        visualNote: "Meet the XI RPL class.",
    },
    {
        number: "02",
        category: "Personal portfolio",
        title: "Personal Portfolio",
        description:
            "A personal portfolio showcasing my education, skills, and completed projects.",
        technologies: ["React"],
        href: "https://gilangfaid.vercel.app/",
        visual: "portfolio",
        visualLabel: "GILANG.",
        visualNote: "Get to know me.",
    },
    {
        number: "03",
        category: "Class app",
        title: "Aplikasi Kelas XI RPL",
        description:
            "An app for XI RPL at SMK PGRI 2 Ponorogo, made as a keepsake before we go our separate ways for internships.",
        technologies: ["Dart", "Flutter"],
        href: "https://download-landing-page.vercel.app/",
        visual: "mobile",
        visualLabel: "CLASS",
        visualNote: "Memories you can carry.",
    },
    {
        number: "04",
        category: "Gateway website",
        title: "GateWay",
        description:
            "A gateway website that brings all of my projects together.",
        technologies: ["HTML", "CSS", "JS"],
        href: "https://pageoflang.vercel.app/",
        visual: "gateway",
        visualLabel: "GATEWAY",
        visualNote: "One place for all my projects.",
    },
    {
        number: "05",
        category: "Web Edukasi",
        title: "EduFuture",
        description: "A Website To Provide Quality Education.",
        technologies: ["React", "CSS", "JS"],
        href: "https://itx-2026-web-dev-coppy-paste-smk-pg.vercel.app/",
        visual: "edufuture",
        visualLabel: "EDUFUTURE",
        visualNote: "One place for all my projects.",
    },
];

type Project = (typeof projects)[number];

const education = [
    {
        period: '2025 — present',
        school: 'SMK PGRI 2 Ponorogo',
        detail: 'Vocational high school · Grade 11 Software Engineering, focused on frontend and penetration testing.',
    },
    {
        period: '2022 — 2025',
        school: 'MTSN Darul Huda Mayak',
        detail: 'Junior high school, with a focus on character and good manners.',
    },
    {
        period: '2016 — 2022',
        school: "MI Ma'arif Mayak",
        detail: 'Elementary school; active in the computer extracurricular program.',
    },
];

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 30 },
    { name: 'Laravel', level: 50 },
];

const tools = [
    'VS Code',
    'Git & GitHub',
    'XAMPP',
    'Bootstrap',
    'Laravel Herd',
];

const missions = [
    'Consistently master the fundamentals of web and mobile development.',
    'Build real-world projects to strengthen my problem-solving skills.',
    'Take part in competitions and certifications to challenge myself.',
    'Keep learning new technologies while supporting my teammates.',
];

const certificates = [
    {
        number: '01',
        title: 'Gamelab Indonesia Industry Visit',
        issuer: 'Gamelab Indonesia',
        year: '2025',
        image: '/images/certificates/gamelab.webp',
    },
    {
        number: '02',
        title: 'GLOW#321 Participation',
        issuer: 'GameLAB Indonesia',
        year: '2025',
        image: '/images/certificates/gamelab2.webp',
    },
    {
        number: '03',
        title: 'Dicoding METC Participation',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        image: '/images/certificates/dicoding.webp',
    },
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/cadanganacoout-lab',
        icon: Github,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/gilang-nur-naulida-faid-080233400/',
        icon: Linkedin,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/gilanzq_/',
        icon: Instagram,
    },
];

export default function Portfolio() {
    const [previewProject, setPreviewProject] = useState<Project | null>(null);
    const previewDialogRef = useRef<HTMLDialogElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const email = 'cadanganacoout@gmail.com';
    const phone = '0889-9153-1800';

    useEffect(() => {
        const portfolio = portfolioRef.current;

        if (
            !portfolio ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const revealElements =
            portfolio.querySelectorAll<HTMLElement>('.reveal');

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach((element) =>
                element.classList.add('is-visible'),
            );

            return;
        }

        portfolio.classList.add('has-reveal');

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
        );

        revealElements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
            portfolio.classList.remove('has-reveal');
        };
    }, []);

    useEffect(() => {
        const dialog = previewDialogRef.current;

        if (!dialog) {
            return;
        }

        if (previewProject && !dialog.open) {
            dialog.showModal();
        } else if (!previewProject && dialog.open) {
            dialog.close();
        }
    }, [previewProject]);

    return (
        <>
            <Head title="Gilang Nur Maulida Faid — Portfolio">
                <meta
                    name="description"
                    content="Portfolio of Gilang Nur Maulida Faid, a Grade 11 Software Engineering student at SMK PGRI 2 Ponorogo."
                />
            </Head>

            <div
                className="portfolio-page min-h-screen overflow-hidden bg-[#0b100f] text-[#f3f2eb]"
                ref={portfolioRef}
            >
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>

                <main id="main-content">
                    <section className="hero-section page-container" id="home">
                        <div className="hero-copy">
                            <p className="eyebrow">
                                <span className="status-dot" />
                                CURRENTLY INTERNING
                            </p>
                            <h1>
                                Hi, I’m
                                <br />
                                <span>Gilang.</span>
                            </h1>
                            <p className="hero-description">
                                I’m a Software Engineering student who loves
                                turning ideas and lines of code into lively
                                digital experiences.
                            </p>
                            <div className="hero-actions">
                                <a
                                    className="button button-primary"
                                    href="#work"
                                >
                                    View my work
                                    <ArrowDown aria-hidden="true" size={16} />
                                </a>
                                <a
                                    className="text-link"
                                    href={`mailto:${email}`}
                                >
                                    Let’s connect
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        size={16}
                                    />
                                </a>
                            </div>
                            <div className="hero-location">
                                <MapPin aria-hidden="true" size={15} />
                                Ponorogo, East Java, Indonesia
                            </div>
                        </div>

                        <div
                            className="hero-art"
                            aria-label="Gilang’s profile card"
                        >
                            <div className="orbit orbit-one" />
                            <div className="orbit orbit-two" />
                            <div className="profile-card">
                                <div className="profile-card-top">
                                    <span>PORTFOLIO / 2026</span>
                                    <span className="profile-card-spark">
                                        ✳
                                    </span>
                                </div>
                                <div className="monogram">GF</div>
                                <div className="profile-card-bottom">
                                    <div>
                                        <strong>Gilang Faid</strong>
                                        <span>
                                            Software Engineering student · Grade
                                            11
                                        </span>
                                    </div>
                                    <span className="profile-card-arrow">
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            size={19}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="code-note">
                                <span className="code-note-icon">
                                    <Code2 aria-hidden="true" size={17} />
                                </span>
                                <span>
                                    <span className="code-note-label">
                                        CURRENTLY LEARNING
                                    </span>
                                    <strong>Web development</strong>
                                </span>
                            </div>
                            <span className="hero-coordinate">
                                07°52&apos; S · 111°28&apos; E
                            </span>
                        </div>

                        <div className="hero-bottomline">
                            <span>
                                WEB DEVELOPER · STUDENT · LIFELONG LEARNER
                            </span>
                            <a href="#about">
                                SCROLL TO EXPLORE
                                <ArrowDown aria-hidden="true" size={14} />
                            </a>
                        </div>
                    </section>

                    <section className="about-section section-space" id="about">
                        <div className="page-container about-grid">
                            <div className="section-heading">
                                <p className="eyebrow">01 / ABOUT ME</p>
                                <h2>
                                    Curiosity is
                                    <br />
                                    where <span>it all begins.</span>
                                </h2>
                            </div>
                            <div className="about-copy">
                                <p>
                                    I became interested in computers in junior
                                    high, when I tinkered with a personal blog
                                    and wondered how a webpage could feel
                                    “alive.” That curiosity led me to teach
                                    myself through video tutorials before
                                    pursuing a formal education in a field I
                                    love.
                                </p>
                                <p>
                                    I chose Software Engineering because I want
                                    to understand how to build applications from
                                    the ground up—from program logic and
                                    interface design to creating something
                                    people can actually use. To me, it’s a
                                    practical way to turn ideas into something
                                    real.
                                </p>
                                <div
                                    className="interest-list"
                                    aria-label="Interests"
                                >
                                    <span>Frontend enthusiast</span>
                                    <span>Learning every day</span>
                                    <span>Open to internships</span>
                                </div>
                                <div className="vision-card">
                                    <span className="code-note-label">
                                        VISION
                                    </span>
                                    <p>
                                        To become a software engineer who builds
                                        useful, intuitive digital products to a
                                        professional standard.
                                    </p>
                                </div>
                                <div className="mission-block">
                                    <h3>What I’m working toward</h3>
                                    <ol>
                                        {missions.map((mission) => (
                                            <li key={mission}>{mission}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="work-section section-space" id="work">
                        <div className="page-container">
                            <div className="section-topline">
                                <div className="section-heading">
                                    <p className="eyebrow">
                                        02 / SELECTED WORK
                                    </p>
                                    <h2>
                                        Made with
                                        <br />
                                        <span>care and curiosity.</span>
                                    </h2>
                                </div>
                                <p className="section-side-note">
                                    A few small milestones in my learning
                                    journey.
                                </p>
                            </div>

                            <div className="project-grid">
                                {projects.map((project) => (
                                    <article
                                        className="project-card reveal"
                                        key={project.number}
                                    >
                                        <a
                                            className={`project-visual visual-${project.visual}`}
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`View ${project.title} (opens in a new tab)`}
                                        >
                                            <span className="visual-topline">
                                                <span>
                                                    PROJECT / {project.number}
                                                </span>
                                                <ArrowUpRight
                                                    aria-hidden="true"
                                                    size={18}
                                                />
                                            </span>
                                            <span
                                                className="visual-decoration"
                                                aria-hidden="true"
                                            >
                                                {project.visual === 'mobile' ? (
                                                    <span className="phone-outline">
                                                        <span />
                                                    </span>
                                                ) : (
                                                    <span className="visual-orbit">
                                                        <span>
                                                            {
                                                                project.visualLabel
                                                            }
                                                        </span>
                                                    </span>
                                                )}
                                            </span>
                                            <span className="visual-caption">
                                                <strong>
                                                    {project.visualLabel}
                                                </strong>
                                                <span>
                                                    {project.visualNote}
                                                </span>
                                            </span>
                                        </a>
                                        <div className="project-info">
                                            <div className="project-meta">
                                                <span>{project.category}</span>
                                                <span>2026</span>
                                            </div>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <div className="technology-list">
                                                {project.technologies.map(
                                                    (technology) => (
                                                        <span key={technology}>
                                                            {technology}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                            <div className="project-actions">
                                                <button
                                                    className="project-preview-button"
                                                    type="button"
                                                    onClick={() =>
                                                        setPreviewProject(
                                                            project,
                                                        )
                                                    }
                                                >
                                                    Preview live
                                                    <ArrowUpRight
                                                        aria-hidden="true"
                                                        size={14}
                                                    />
                                                </button>
                                                <a
                                                    className="project-external-link"
                                                    href={project.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`Open ${project.title} in a new tab`}
                                                >
                                                    Open site
                                                    <ExternalLink
                                                        aria-hidden="true"
                                                        size={13}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        className="journey-section section-space"
                        id="journey"
                    >
                        <div className="page-container journey-grid">
                            <div className="journey-intro reveal">
                                <p className="eyebrow">
                                    03 / JOURNEY &amp; SKILLS
                                </p>
                                <h2>
                                    Always learning.
                                    <br />
                                    <span>Always growing.</span>
                                </h2>
                                <p>
                                    My goal is to become a software engineer who
                                    builds useful, user-friendly digital
                                    products to a professional standard.
                                </p>
                                <div className="learning-card">
                                    <span className="learning-icon">
                                        <Code2 aria-hidden="true" size={20} />
                                    </span>
                                    <span>
                                        <span className="code-note-label">
                                            MY MOTTO
                                        </span>
                                        <strong>
                                            consistency &gt; intensity
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            <div className="journey-details reveal">
                                <div className="detail-block">
                                    <div className="detail-heading">
                                        <h3>Education</h3>
                                        <span>2016 — PRESENT</span>
                                    </div>
                                    <ol className="education-list">
                                        {education.map((item, index) => (
                                            <li key={item.school}>
                                                <span className="education-marker">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>
                                                <div>
                                                    <span className="education-period">
                                                        {item.period}
                                                    </span>
                                                    <strong>
                                                        {item.school}
                                                    </strong>
                                                    <span className="education-detail">
                                                        {item.detail}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                <div className="detail-block skills-block">
                                    <div className="detail-heading">
                                        <h3>Languages &amp; technologies</h3>
                                        <span>ALWAYS IN PROGRESS</span>
                                    </div>
                                    <div className="skill-grid">
                                        {skills.map((skill) => (
                                            <div
                                                className="skill-item"
                                                key={skill.name}
                                            >
                                                <div className="skill-label">
                                                    <span>{skill.name}</span>
                                                    <span>{skill.level}%</span>
                                                </div>
                                                <div
                                                    className="skill-track"
                                                    role="meter"
                                                    aria-label={`${skill.name}, ${skill.level}%`}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    aria-valuenow={skill.level}
                                                >
                                                    <span
                                                        style={{
                                                            width: `${skill.level}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="tool-list"
                                        aria-label="Tools I use"
                                    >
                                        {tools.map((tool) => (
                                            <span key={tool}>{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="certificates-section section-space"
                        id="certificates"
                    >
                        <div className="page-container">
                            <div className="section-topline">
                                <div className="section-heading">
                                    <p className="eyebrow">04 / CERTIFICATES</p>
                                    <h2>
                                        Experiences that
                                        <br />
                                        <span>shaped my journey.</span>
                                    </h2>
                                </div>
                                <p className="section-side-note">
                                    Activities and milestones from my learning
                                    journey.
                                </p>
                            </div>
                            <div className="certificate-grid">
                                {certificates.map((certificate) => (
                                    <article
                                        className="certificate-card reveal"
                                        key={certificate.number}
                                    >
                                        <a
                                            className="certificate-image-link"
                                            href={certificate.image}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`View full certificate: ${certificate.title} (opens in a new tab)`}
                                        >
                                            <img
                                                className="certificate-image"
                                                src={certificate.image}
                                                alt={`${certificate.title} certificate`}
                                                loading="lazy"
                                            />
                                            <span className="certificate-view">
                                                View full certificate
                                                <ArrowUpRight
                                                    aria-hidden="true"
                                                    size={14}
                                                />
                                            </span>
                                        </a>
                                        <div className="certificate-info">
                                            <span className="certificate-number">
                                                {certificate.number}
                                            </span>
                                            <span className="certificate-year">
                                                {certificate.year}
                                            </span>
                                            <h3>{certificate.title}</h3>
                                            <p>{certificate.issuer}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        className="contact-section page-container"
                        id="contact"
                    >
                        <div className="contact-panel reveal">
                            <div className="contact-glow" aria-hidden="true" />
                            <div className="contact-content">
                                <p className="eyebrow">
                                    05 / WHAT’S NEXT? LET’S...
                                </p>
                                <h2>
                                    Make something
                                    <br />
                                    <span>meaningful.</span>
                                </h2>
                                <p>
                                    Have an idea, an internship opportunity, or
                                    just want to talk about technology? I’d love
                                    to hear from you.
                                </p>
                                <a
                                    className="button button-dark"
                                    href={`mailto:${email}`}
                                >
                                    <Mail aria-hidden="true" size={16} />
                                    Send me an email
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        size={16}
                                    />
                                </a>
                            </div>
                            <div className="contact-aside">
                                <span className="contact-aside-label">
                                    FIND ME ON
                                </span>
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Icon aria-hidden="true" size={17} />
                                        {label}
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            size={14}
                                        />
                                    </a>
                                ))}
                                <a
                                    href="https://wa.me/6288991531800"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    WhatsApp
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        size={14}
                                    />
                                </a>
                                <span className="contact-phone">
                                    {phone} · MESSAGE ONLY
                                </span>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="site-footer page-container">
                    <a
                        className="brand-mark"
                        href="#home"
                        aria-label="Back to top"
                    >
                        g<span>f</span>.
                    </a>
                    <p>Independently made by Gilang Nur Maulida Faid | 2026</p>
                    <a className="back-to-top" href="#home">
                        BACK TO TOP
                        <ArrowUpRight aria-hidden="true" size={14} />
                    </a>
                </footer>

                <dialog
                    className="preview-dialog"
                    ref={previewDialogRef}
                    aria-labelledby="preview-title"
                    onClose={() => setPreviewProject(null)}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            previewDialogRef.current?.close();
                        }
                    }}
                >
                    {previewProject && (
                        <>
                            <div className="preview-dialog-header">
                                <div>
                                    <span className="code-note-label">
                                        LIVE PROJECT PREVIEW
                                    </span>
                                    <h2 id="preview-title">
                                        {previewProject.title}
                                    </h2>
                                </div>
                                <div className="preview-dialog-actions">
                                    <a
                                        href={previewProject.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="preview-open-link"
                                    >
                                        Open in new tab
                                        <ExternalLink
                                            aria-hidden="true"
                                            size={14}
                                        />
                                    </a>
                                    <button
                                        className="preview-close-button"
                                        type="button"
                                        aria-label="Close live preview"
                                        onClick={() =>
                                            previewDialogRef.current?.close()
                                        }
                                    >
                                        <X aria-hidden="true" size={19} />
                                    </button>
                                </div>
                            </div>
                            <iframe
                                className="preview-frame"
                                title={`${previewProject.title} live website`}
                                src={previewProject.href}
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
                            />
                            <p className="preview-fallback-note">
                                If this site does not appear here, it may block
                                embedded previews. Use “Open in new tab” to view
                                it directly.
                            </p>
                        </>
                    )}
                </dialog>
            </div>
        </>
    );
}
