document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded and JavaScript is working!");  // Initial debug log
    
    const form = document.getElementById('resume-form');
    const resumeDisplay = document.getElementById('resume-display');
    const editButton = document.getElementById('edit-resume');
    const previewButton = document.getElementById('preview-resume');
    const downloadButton = document.getElementById('download-pdf');

    // Function to populate and show the preview
    function previewResume() {
        console.log("Preview Resume triggered");  // Debugging log

        // Populate the resume preview fields
        document.getElementById('display-name').textContent = document.getElementById('name').value;
        document.getElementById('display-email').textContent = document.getElementById('email').value;
        document.getElementById('display-phone').textContent = document.getElementById('phone').value;
        document.getElementById('display-degree').textContent = document.getElementById('degree').value;
        document.getElementById('display-institution').textContent = document.getElementById('institution').value;
        document.getElementById('display-gradYear').textContent = document.getElementById('gradYear').value;
        document.getElementById('display-jobTitle').textContent = document.getElementById('jobTitle').value;
        document.getElementById('display-company').textContent = document.getElementById('company').value;
        document.getElementById('display-years').textContent = document.getElementById('years').value;
        document.getElementById('display-jobDesc').textContent = document.getElementById('jobDesc').value;
        document.getElementById('display-skills').textContent = document.getElementById('skills').value;

        // Show preview and buttons
        resumeDisplay.style.display = 'block';
        downloadButton.style.display = 'inline-block';  // Ensure button is visible
        console.log("Download Button should now be visible:", downloadButton.style.display);  // Debugging log
        form.style.display = 'none';  // Hide the form

        // Attach event listener to the download button after it becomes visible
        downloadButton.addEventListener('click', function () {
            console.log("Download button clicked");  // Debugging log for button click
            downloadResumePDF();  // Call the PDF generation function
        });
    }

    // Function to return to editing mode
    function editResume() {
        console.log("Edit Resume triggered");  // Debugging log

        form.style.display = 'block';
        resumeDisplay.style.display = 'none';
        downloadButton.style.display = 'none';  // Hide download button
    }

    // Function to download the resume as PDF using html2pdf
    function downloadResumePDF() {
        console.log("Download PDF button clicked");  // Debugging log

        const resumeSection = document.getElementById('resume-display');
        if (resumeSection) {
            console.log("Generating PDF...");  // Debugging log

            // PDF options
            const opt = {
                margin: 1,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Try generating PDF
            html2pdf().from(resumeSection).set(opt).save();
        } else {
            console.error("Resume section is not defined or is empty.");
        }
    }

    // Event listeners
    previewButton.addEventListener('click', previewResume);
    editButton.addEventListener('click', editResume);
});
