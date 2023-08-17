import { UploadWidgetLocale } from "uploader/dist/modules/locales/UploadWidgetLocale";

interface UploaderConfig {
  locale: UploadWidgetLocale;
}

const uploaderConfig: UploaderConfig = {
  locale: {
    "error!": "Error!",
    "done": "Done",
    "addAnotherFile": "Add another file...",
    "addAnotherImage": "Add another image...",
    "cancel": "إلغاء",
    "cancelInPreviewWindow": "Cancel",
    "cancelled!": "cancelled",
    "continue": "Continue",
    "customValidationFailed": "Failed to validate file.",
    "crop": "Crop",
    "finish": "Finished",
    "finishIcon": true,
    "image": "Image",
    "maxFilesReached": "Maximum number of files:",
    "maxImagesReached": "Maximum number of images:",
    "maxSize": "File size limit:",
    "next": "Next",
    "of": "of",
    "orDragDropFile": "...or drag and drop a file.",
    "orDragDropFiles": "...or drag and drop files.",
    "orDragDropImage": "...or drag and drop an image.",
    "orDragDropImages": "...or drag and drop images.",
    "pleaseWait": "Please wait...",
    "removed!": "removed",
    "remove": "remove",
    "skip": "Skip",
    "unsupportedFileType": "File type not supported.",
    "uploadFile": "Upload a File",
    "uploadFiles": "Upload a File", // We've now chosen to use singular tense for the upload button.
    "uploadImage": "اختر صورة",
    "uploadImages": "اختر صورة",
    "processingFile": "Processing file..."
  }
}

export default uploaderConfig;