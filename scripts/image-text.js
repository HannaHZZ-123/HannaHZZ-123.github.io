hexo.extend.tag.register('image_text', function(args, content) {
    const imageUrl = args[0];
    const altText = args[1] || '';
    const text = hexo.render.renderSync({ text: content, engine: 'markdown' });
  
    return `
  <div style="display: flex; align-items: center; margin: 10px 0;">
    <img src="${imageUrl}" alt="${altText}" style="width: 30%; margin-right: 20px;">
    <div style="flex: 1;">
      ${text}
    </div>
  </div>
    `;
  }, { ends: true });