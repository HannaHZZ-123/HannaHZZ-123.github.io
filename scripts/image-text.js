hexo.extend.tag.register('image_text', function (args, content) {
	const imageUrl = args[0];
	const altText = args[1] || '';
	const text = hexo.render.renderSync({ text: content, engine: 'markdown' });
  
	return `
  <div class="image-text-container">
	<img src="${imageUrl}" alt="${altText}" class="image-text-image">
	<div class="image-text-content">
	  ${text}
	</div>
  </div>
	`;
  }, { ends: true });