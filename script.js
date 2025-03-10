document.getElementById("adoption-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const hasDog = document.getElementById("checkbox").checked;
    const breeds = Array.from(document.getElementById("multiSelect").selectedOptions).map(opt => opt.value);

    if (!name || !phone || !address || breeds.length === 0) {
        alert("Please fill out all required fields.");
        return;
    }

    alert(`Application Submitted Successfully!\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nPrevious Dog Owner: ${hasDog ? "Yes" : "No"}\nPreferred Breeds: ${breeds.join(", ")}`);
});
