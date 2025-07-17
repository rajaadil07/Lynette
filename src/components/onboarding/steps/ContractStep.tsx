import { useState } from 'react'
import { OnboardingStepProps } from '../types'

export default function ContractStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: OnboardingStepProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleFileUpload = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0]
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        setFormData(prev => ({ 
          ...prev, 
          contractFile: file,
          contractUploaded: true 
        }))
      } else {
        alert('Please upload a PDF file.')
      }
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const handleNDAToggle = () => {
    setFormData(prev => ({ ...prev, ndaSigned: !prev.ndaSigned }))
  }

  const isFormValid = formData.ndaSigned && formData.contractUploaded

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-inter font-semibold text-[#F8F9FA]">
            Contract & Legal
          </h1>
          <p className="text-lg text-[#F8F9FA]/60">
            Let&apos;s handle the legal requirements for your project
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-8 space-y-8">
          {/* NDA Agreement */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Non-Disclosure Agreement</h2>
            
            <div className="bg-[#5D9CEC]/5 border border-[#5D9CEC]/20 rounded-lg p-6">
              <div className="space-y-4">
                <h3 className="font-medium text-[#F8F9FA]">Confidentiality Protection</h3>
                <p className="text-sm text-[#F8F9FA]/70 leading-relaxed">
                  By proceeding, you agree that all information shared during this project, including 
                  personal stories, business insights, and manuscript content, will be kept strictly 
                  confidential. Your ghostwriter is legally bound to protect your privacy.
                </p>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="nda"
                    checked={formData.ndaSigned}
                    onChange={handleNDAToggle}
                    className="mt-1 w-4 h-4 text-[#5D9CEC] bg-[#1B1B1F] border-white/20 rounded focus:ring-[#5D9CEC] focus:ring-2"
                  />
                  <label htmlFor="nda" className="text-sm text-[#F8F9FA] cursor-pointer">
                    I agree to the Non-Disclosure Agreement and confidentiality terms
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Upload */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Project Contract</h2>
            
            {!formData.contractUploaded ? (
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-[#5D9CEC] bg-[#5D9CEC]/10' 
                    : 'border-white/20 hover:border-[#5D9CEC]/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-[#5D9CEC]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#5D9CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#F8F9FA] mb-2">Upload your contract</h3>
                    <p className="text-sm text-[#F8F9FA]/60 mb-4">
                      Drop your PDF contract here, or click to browse
                    </p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="contract-upload"
                    />
                    <label 
                      htmlFor="contract-upload"
                      className="inline-flex items-center px-4 py-2 border border-[#5D9CEC] text-[#5D9CEC] rounded-lg hover:bg-[#5D9CEC]/10 transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Browse Files
                    </label>
                  </div>
                  <p className="text-xs text-[#F8F9FA]/50">PDF files only, up to 10MB</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#5D9CEC]/10 border border-[#5D9CEC]/30 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#5D9CEC]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5D9CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#F8F9FA]">Contract uploaded</h3>
                    <p className="text-sm text-[#F8F9FA]/60">
                      {formData.contractFile?.name || 'contract.pdf'}
                    </p>
                  </div>
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, contractUploaded: false, contractFile: undefined }))}
                    className="text-[#F8F9FA]/40 hover:text-[#F8F9FA] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Legal Notice */}
          <div className="bg-[#FBC02D]/5 border border-[#FBC02D]/30 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#FBC02D]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#FBC02D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-[#F8F9FA] mb-1">Legal Protection</h3>
                <p className="text-sm text-[#F8F9FA]/70 leading-relaxed">
                  These agreements ensure your intellectual property is protected throughout the 
                  ghostwriting process. All documents are securely stored and handled in compliance 
                  with industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-white/10">
            <button
              onClick={onBack}
              className="px-6 py-3 border border-white/10 text-[#F8F9FA]/70 rounded-lg font-medium text-sm hover:border-[#5D9CEC]/50 hover:text-[#F8F9FA] transition-colors"
            >
              Back
            </button>
            <button
              onClick={onNext}
              disabled={!isFormValid}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors ${
                isFormValid
                  ? 'bg-[#5D9CEC] text-white hover:bg-[#4A8BE8]'
                  : 'bg-white/10 text-[#F8F9FA]/40 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 