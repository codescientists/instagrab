
import Downloader from "@/components/Downloader";

export default function Home() {

  return (
    <main>
      
      <Downloader />

      <div className="mt-8 px-5 lg:px-36">
          <h1 className="text-3xl font-bold mb-6 text-center">
            How to save from IG with InstaGrab Instagram Downloader
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Step 01: Copy Instagram Photos & Videos URL</h2>
            <p>
              <strong>On the Instagram app (iOS):</strong> Click "Get Instagram photo URL" above the post,
              then hit "Copy Share URL." The link will be saved to your clipboard.
            </p>
            <p>
              <strong>On the Instagram app (Android):</strong> Copy the Instagram URL above the post. The
              link will be saved to your clipboard.
            </p>
            <p>
              <strong>On PC / Mac:</strong> Right-click on the date of the video or photo on Instagram,
              then click "Copy Link Address" to download Instagram video on desktop.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Step 02: Paste the URL into InstaGrab</h2>
            <p>
              Paste the copied URL into the GrabInsta - Instagram downloader in the text box area
              above.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Step 03: Hit the "Download" button</h2>
            <p>Click the "Download" button for Instagram Video Download.</p>
          </div>

          <div className="mb-6">
            <p>
              <strong>Note:</strong> Our tools were designed to help you download videos and images
              uploaded by your own account. We reserve the right to refuse service if our tools are used
              to infringe upon others' privacy and material.
            </p>
          </div>

          <div className="text-center">
            <a
              href="/terms-of-service"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Read our full Terms of Service here
            </a>
          </div>
        </div>
    </main>
  )
}
