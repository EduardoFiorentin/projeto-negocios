const Description = ()=>{
    document.querySelector('[data-description-li]').classList.add('description__menu-li--vermelho')
    document.querySelector('[data-specification-li]').classList.remove('description__menu-li--vermelho')
    document.querySelector('[data-reviews-li]').classList.remove('description__menu-li--vermelho')

    document.querySelector('[data-description]').classList.remove('esconder')
    document.querySelector('[data-specification]').classList.add('esconder')
    document.querySelector('[data-review]').classList.add('esconder')
}

const Specifications = ()=>{
    document.querySelector('[data-specification-li]').classList.add('description__menu-li--vermelho')
    document.querySelector('[data-description-li]').classList.remove('description__menu-li--vermelho')  
    document.querySelector('[data-reviews-li]').classList.remove('description__menu-li--vermelho')

    document.querySelector('[data-specification]').classList.remove('esconder')
    document.querySelector('[data-description]').classList.add('esconder')
    document.querySelector('[data-review]').classList.add('esconder')
}

const Review = ()=>{
    document.querySelector('[data-reviews-li]').classList.add('description__menu-li--vermelho')
    document.querySelector('[data-description-li]').classList.remove('description__menu-li--vermelho')
    document.querySelector('[data-specification-li]').classList.remove('description__menu-li--vermelho')

    document.querySelector('[data-review]').classList.remove('esconder')
    document.querySelector('[data-specification]').classList.add('esconder')
    document.querySelector('[data-description]').classList.add('esconder')
}


