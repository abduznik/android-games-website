Jekyll::Hooks.register [:pages, :posts], :post_render do |doc|
  doc.output.gsub!(/<img src="\/assets\//, "<img src=\"#{doc.site.baseurl}/assets/")
end
