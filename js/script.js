// Project 4 – Trigun Wanted Poster Generator

// Get form and output section
const form = document.getElementById("wanted-form");
const output = document.getElementById("poster-output");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get user input values
    const name = document.getElementById("username").value.trim();
    const crime = document.getElementById("crime").value;
    const danger = document.getElementById("danger").value;

    // Generate a random bounty amount (fun + dynamic)
    const bounty = Math.floor(Math.random() * 90000000000) + 10000000000;

    // Build the wanted poster HTML
    const posterHTML = `
        <div style="
            border: 4px solid #7a1f1f;
            padding: 20px;
            max-width: 500px;
            margin: 0 auto;
            background-color: #fff;
            text-align: center;
            border-radius: 10px;
        ">
            <h2 style="color: #7a1f1f;">WANTED</h2>
            <h3>${name}</h3>

            <p><strong>Crime:</strong> ${crime}</p>
            <p><strong>Danger Level:</strong> ${danger}</p>

            <p style="font-size: 1.3rem; margin-top: 15px;">
                <strong>Bounty:</strong> $$${bounty.toLocaleString()} Double Dollars
            </p>

            <img src="../images/vash.jpg" 
                 alt="Stylized Trigun wanted poster image" 
                 style="width: 250px; margin-top: 15px; border-radius: 6px;">
        </div>
    `;

    // Insert poster into the page
    output.innerHTML = posterHTML;
});
