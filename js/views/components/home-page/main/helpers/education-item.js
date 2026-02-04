export default function educationItem(title, dateRange, provider, subtitle = "") {

    const eduItem = document.createElement("div");
    eduItem.className = "edu-item";

    const eduHeader = document.createElement("div");
    eduHeader.className = "edu-header";

    const eduTitle = document.createElement("h3");
    eduTitle.className = "edu-title";
    eduTitle.textContent = title;

    const eduDate = document.createElement("span");
    eduDate.className = "edu-date";
    eduDate.textContent = dateRange;

    // If there's no subtitle, append the title directly to the header
    if (!subtitle) {
        eduHeader.appendChild(eduTitle);
    }

    eduItem.appendChild(eduHeader);

    // If there's a subtitle, create a group for title and subtitle
    if (subtitle) {

        const eduGroup = document.createElement("div");
        eduGroup.className = "edu-title-group";

        eduHeader.appendChild(eduGroup);
        eduGroup.appendChild(eduTitle);

        const eduSubtitle = document.createElement("p");
        eduSubtitle.className = "edu-subtitle";
        eduSubtitle.textContent = subtitle;
        
        eduGroup.appendChild(eduSubtitle);
    }

    eduHeader.appendChild(eduDate);

    const eduProvider = document.createElement("p");
    eduProvider.className = "edu-provider";
    eduProvider.textContent = provider;

    eduItem.appendChild(eduProvider);

    return eduItem;
}
