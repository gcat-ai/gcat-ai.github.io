webpackJsonp([5],{JxTP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("b4aK"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ServiceDetail"}},[i("div",{staticClass:"banner container-fuild text-center"},[t._v("服务优势")]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-sm-12 col-md-3",attrs:{id:"myScrollspy"}},[i("ul",{staticClass:"nav nav-tabs nav-stacked center-block",attrs:{id:"myNav"}},[i("p",[t._v("服务优势")]),t._v(" "),t._l(t.serviceNavList,function(e,n){return i("li",{key:n,class:e.id==t.id?"active":""},[i("a",{attrs:{href:"#"+e.id}},[t._v(t._s(e.title))])])})],2)]),t._v(" "),i("div",{staticClass:"col-xs-12 col-sm-12 col-md-9 content  wow zoomIn"},t._l(t.serviceContentList,function(e,n){return i("div",{key:n,staticClass:"content-block"},[i("h2",{attrs:{id:e.id}},[t._v("\n              "+t._s(e.title)+"\n")]),t._v(" "),i("div",{domProps:{innerHTML:t._s(e.content)}})])}),0)])])])},staticRenderFns:[]};var c=function(t){i("RtIn")},o=i("VU/8")(n.a,s,!1,c,"data-v-1e91340f",null);e.default=o.exports},RtIn:function(t,e){},b4aK:function(t,e,i){"use strict";(function(t){var n=i("q4TV");i.n(n);e.a={name:"ServiceDetail",data:function(){return{id:"section-1",serviceNavList:[{id:"section-1",title:"无损压缩"},{id:"section-2",title:"更快传输"},{id:"section-3",title:"透明使用"},{id:"section-4",title:"高速分析"},{id:"section-5",title:"极简IT"},{id:"section-6",title:"无锁环境"}],serviceContentList:[{id:"section-1",title:"无损压缩",eng_title:"Customize App",content:"<p>我们提供稳定，高性能的FASTQ.gz 和BAM 格式的基因数据压缩技术。我们的压缩技术可以减少FASTQ.gz 和BAM数据的存储空间高达60%-90%，同时保留原始文件的每一个字符。我们不仅可以为原始的数据文件保留其MD5信息摘要，也可以为已经内部压缩的数据文件保留其MD5信息摘要。</p><p>我们的压缩速度极快。在4核i7的测试下，FASTQ数据的压缩可以达到270+ Mb/s，并且压缩算法只需要3Gb的RAM内存。与CRAM技术不同的是，我们的压缩技术会自动保留全部数据：您无需为压缩或解压缩提供任何参考。我们的技术基于神经网络模型，会自动检测数据分布，并实现最简单和最优化的压缩。</p>"},{id:"section-2",title:"更快传输",eng_title:"Outsourcing",content:"<p>我们的基因数据压缩技术可以减少网络数据传输时间高达60%-90%：这意味着原本10小时的数据传输时间可以减少到1小时，又或者一周的数据传输时间可以减少到一天。我们的数据压缩技术可以大幅缩短基因研发及工程项目中的数据传输时间，从而提高其相应的生产效率。</p><p>我们的数据压缩技术以流式处理方式实现：不论是FASTQ.gz或者BAM文件都能以流式方式进行即时的压缩，传输和解压缩。您无需等待文件的完整处理完成，即可访问其已完成的数据，真正实现效率的提升。</p>"},{id:"section-3",title:"透明使用",eng_title:"eCommerce Site",content:"<p>我们的基因数据压缩技术支持以原文件的文件格式访问压缩文件，不论是FASTQ.gz或是BAM文件。压缩后的文件以完全一致的路径和文件名存在于本地或云端，您的原有工作流程甚至不会发觉到任何事情发生了变化。</p><p>我们的压缩技术可以让研究人员和医疗人员以现有的工具和流程继续使用他们的FASTQ.gz和BAM文件。我们的压缩技术仿佛透明，可以无感介入到产品线的任何位置。</p>"},{id:"section-4",title:"高速分析",eng_title:"iOS App Dev",content:"<p>基因序列数据分析的主要瓶颈之一即为基因测序数据的传输与访问时间。基因数据的分析几乎都在共享存储资源的服务器云端，但基于硬盘I/O速度和网络带宽速度的有限，即时调动多个服务器并行也会遇到大数据读取的速度瓶颈。这些I/O的速度瓶颈显著降低了整体的数据分析性能。</p><p>通过数据压缩，系统可以实现更快的加载时间。数据解压本身需要的计算开销完全可以被提高的硬盘读取速度抵消，即便是您在使用即时解压缩的数据。因此，使用我们的基因数据压缩技术来解压缩和读取数据可以显著加速您的数据处理速度和工程效率。</p>"},{id:"section-5",title:"极简IT",eng_title:"iOS App Dev",content:"<p>我们的技术不限制购买方的并行用户使用数量。安装我们的压缩软件不需要管理员权限。我们的技术库是用户模式，因此任何用户都可以直接在他们的shell中运行，来达到数据压缩的透明使用，就仿佛数据未被压缩过一样。我们致力于打造极简IT体验，系统管理员无需烦恼于安全性或者系统内核问题。</p>"},{id:"section-6",title:"无锁环境",eng_title:"iOS App Dev",content:"<p>我们认为客户不应该被软件锁定，因此我们的解压缩技术永久免费。我们鼓励我们的客户分享任何我们压缩过的数据文件。我们为任何人免费提供解压缩软件，来访问我们压缩过的FASTQ.gz文件或者BAM文件。</p>"}]}},mounted:function(){this.id=this.$route.params.id;var e=document.getElementById(this.id).offsetTop;t(window).scrollTop(e+300),t("#myNav").affix({offset:{top:300}}),(new n.WOW).init()}}}).call(e,i("4kSj"))}});
//# sourceMappingURL=5.1bf64a61b34ee6619b6b.js.map