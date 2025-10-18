
export default function Card(){
    return(
        <div class="col halaqa-card">
            <div class="h-card">
                <div class="row g-0">
                    <div class="h-card-img">
                        {/* @{
                            var imgSrc = string.IsNullOrWhiteSpace(manhaj.Picture)
                            ? Url.Content("~/images/ManahjPic.jpg")
                            : Url.Content(manhaj.Picture);
                        } */}
                        <img src="@imgSrc" class="img-fluid" alt="صورة المنهج" />

                    </div>
                    <div class="h-card-content">
                        <div class="card-body">
                            <h5 class="card-title">@manhaj.Name</h5>
                            <p class="card-text"><strong>المؤلف:</strong> @manhaj.AuthorName</p>
                            <p class="card-text"><strong>الفئة:</strong> @manhaj.TargetAudionce</p>
                            <div class="buttons">
                                <a asp-action="Details" asp-route-id="@manhaj.ManhajId" class="btn-sm btn-my-1"><i class="bi bi-eye"></i></a>
                                <a asp-action="Edit" asp-route-id="@manhaj.ManhajId" class="btn-sm btn-my-1"><i class="bi bi-pencil"></i></a>
                                <a asp-action="Delete" asp-route-id="@manhaj.ManhajId" class="btn-sm btn-my-2" onclick="return confirm('هل أنت متأكد؟')"><i class="bi bi-trash3-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

