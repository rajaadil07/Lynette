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
    <div className="min-h-screen bg-white py-8 px-6">
      <div className="w-full max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-medium text-gray-900">Legal Documents</h1>
          <p className="text-gray-600">Secure your project with legal protection</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* NDA Agreement */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Non-Disclosure Agreement</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 text-sm mb-3">
                This NDA ensures that all project details, manuscript content, and personal information 
                shared during our collaboration remain strictly confidential.
              </p>
              
              <div className="space-y-2">
                {[
                  'Complete manuscript confidentiality',
                  'Personal information protection', 
                  'Professional standards compliance',
                  'Secure data handling protocols'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <label className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
              formData.ndaSigned 
                ? 'border-gray-900 bg-gray-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}>
              <input
                type="checkbox"
                checked={formData.ndaSigned}
                onChange={handleNDAToggle}
                className="mt-1 w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900">I agree to the Non-Disclosure Agreement</div>
                <p className="text-sm text-gray-600 mt-1">
                  By checking this box, I acknowledge that I have read and agree to be bound by the terms of the NDA.
                </p>
              </div>
            </label>
          </div>

          {/* Contract Upload */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Project Contract</h2>
            
            <div 
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                dragActive 
                  ? 'border-gray-900 bg-gray-50' 
                  : formData.contractUploaded 
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              {formData.contractUploaded ? (
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Contract Uploaded Successfully</p>
                    <p className="text-gray-600 text-sm mt-1">{formData.contractFile?.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Click to replace file</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Upload Your Contract</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Drag and drop your PDF here, or click to browse
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF files only, max 10MB</p>
                  </div>
                </div>
              )}
            </div>

            {/* Alternative Options */}
            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium text-gray-700">Alternative Options:</p>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all text-left">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Email for Digital Signature</div>
                    <div className="text-xs text-gray-600">Send contract for e-signature</div>
                  </div>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all text-left">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Use Template</div>
                    <div className="text-xs text-gray-600">Generate standard contract</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button 
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>

          <button
            onClick={onNext}
            disabled={!isFormValid}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
} 