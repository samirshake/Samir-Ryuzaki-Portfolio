const projectDetails = [
    {
        title:'Animation on Input',
        image:'./project-image/Animation-on-input.png',
        link: 'https://animation-on-input.vercel.app/',
        description: 'これは面白いアニメーションプロジェクトです。 入力に基づいてアニメーションが作成されます'
    },
    {
        title:'Blogsite',
        image:'./project-image/blogsite.png',
        link: 'https://myblogsite-three.vercel.app/index.html',
        description: 'これはブログサイトです。 上の写真のセクションはCSSで作られています。'
    },
    {
        title:'Bmi Calculator',
        image:'./project-image/Bmi-calculator.png',
        link: 'https://bmicalculator979.netlify.app/',
        description: 'BMIは、人の体重と身長から導き出された値です。体重と身長を入力すると、BMIを確認できるアプリです。'
    },
    {
        title:'Bootstrap Project',
        image:'./project-image/Bootstrap-project.png',
        link: 'https://bootstrap-chi.vercel.app/',
        description: 'Web開発にはBootstrapが必要だと聞いたので、Webを検索してBootstrapを学び、それを使ってこのページを作成しました。'
    },
    {
        title:'Featured Cards Design',
        image:'./project-image/Card-feature.png',
        link: 'https://four-card-feature-section-fontendmentor.vercel.app/',
        description: 'frontendmentor.com にプロジェクトを挑戦してこれをつくりました。'
    },
    {
        title:'Clipboard Site',
        image:'./project-image/clipboard.png',
        link: 'https://clipboard-landing-page-fontendmentor.vercel.app/',
        description: 'frontendmentor.com にプロジェクトを挑戦してこれをつくりました。'
    },
    {
        title:'Dynamic Watch',
        image:'./project-image/Dynamic-watch.png',
        link: 'https://dynamicwatch.netlify.app/',
        description: 'Javascriptを使ってデジタル時計を作りました。 ここ "Date" Object について学びました'
    },
    {
        title:'Fylo Landing Page',
        image:'./project-image/fylo.png',
        link: 'https://fylo-landing-page-with-dark-theme-fontendmentor-k7807di35.vercel.app/ ',
        description: 'frontendmentor.com にプロジェクトを挑戦してこれをつくりました。'
    },
    {
        title:'Huddle Landing Page',
        image:'./project-image/huddle.png',
        link: 'https://huddle-landing-page-font-end-mentor.vercel.app/',
        description: 'frontendmentor.com にプロジェクトを挑戦してこれをつくりました。'
    },
    {
        title:'Stop Watch',
        image:'./project-image/Stop-watch.png',
        link: 'https://stopwatch979.netlify.app/',
        description: 'ストップウォッチ プロジェクトです。インクリメント，デクリメンsetInterval,clearIntervalトを使ってこのプロジェクト完成しました。'
    },
    {
        title:'Todo App',
        image:'./project-image/Todo-app.png',
        link: 'https://java-script-projects-2021-todo-app.vercel.app/',
        description: 'JavaScriptを使用してTodoアプリを作りました。ここでLocal Storageについて学びました。'
    }
]


const line = `<div class="middle__line"></div>`;


const timelineContainer = document.querySelector('.timeline__container');
console.log(timelineContainer);

window.addEventListener('DOMContentLoaded',function(){
    timelineContainer.innerHTML= line;
    projectDetails.forEach( data=>{
        let {image,title,description,link} = {...data};
        timelineContainer.innerHTML += `
        <article class=" timeline__item">
            <span class="circle"></span>
            <div class="img">
                
                <a href=${link}>
                <img src="${image}" alt="project-image">
                    </a>
            </div>
                <div class="project-text">
                    <h3>
                        ${title}
                    </h3>
                    <p>
                        ${description}
                    </p>
                    <a href=${link}>
                        View Project
                    </a>
                </div>
        </article>`;
    });
});