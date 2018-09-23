import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import GivingBackPagePreview from './preview-templates/GivingBackPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProjectPostPreview from './preview-templates/ProjectPostPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('about', GivingBackPagePreview)
CMS.registerPreviewTemplate('about', ContactPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('project', ProjectPostPreview)
