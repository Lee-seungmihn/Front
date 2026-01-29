// 리뷰 쓰기 버튼 클릭하면 모달 열기
const reviewButtons = document.querySelectorAll(".opreviewbtn");
reviewButtons.forEach(function(btn) {  
    btn.addEventListener("click", function() {
        document.getElementById("modal1").style.display = "flex";
    })
})

// 나가기 버튼 클릭하면 확인 모달 열기
const closeButtons = document.querySelectorAll(".clreviewbtn");
closeButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.getElementById("modal2").style.display = "flex";
    })
})

// 사진 편집 닫기
const closeCropBtn = document.querySelector(".clreviewbtns");
if (closeCropBtn) {
    closeCropBtn.addEventListener("click", function() {
        document.getElementById("modal3").style.display = "none";
    })
}

// 완료 모달 닫기
const closeCompleteBtn = document.querySelector(".closebtn");
if (closeCompleteBtn) {
    closeCompleteBtn.addEventListener("click", function() {
        document.getElementById("modal4").style.display = "none";
    })
}

// 제출 버튼
const submitButtons = document.querySelectorAll(".submitbtn");
submitButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.getElementById("modal4").style.display = "none";
        document.getElementById("modal1").style.display = "none";
    })
})

// 제출하기 버튼 (다른 버튼)
const mainSubmitBtn = document.querySelector(".Submitbutton");
if (mainSubmitBtn) {
    mainSubmitBtn.addEventListener("click", function() {
        document.getElementById("modal4").style.display = "flex";
    })
}

// 취소 버튼
const cancelBtn = document.querySelector(".ConfirmModal-module_negativeButton");
if (cancelBtn) {
    cancelBtn.addEventListener("click", function() {
        document.getElementById("modal2").style.display = "none";
    })
}

// 확인 버튼 (나가기)
const okButton = document.querySelector(".okbtn");
if (okButton) {
    okButton.addEventListener("click", function() {
        document.getElementById("modal1").style.display = "none";
        document.getElementById("modal2").style.display = "none";
    })
}

// 별점 버튼들
const stars = document.querySelectorAll(".Rating-module_star");
const ratingMessage = document.querySelector(".SatisfactionRating-module_ratingMessage");
let selectedStar = 0;

const starMessages = [
    "별점을 선택해주세요",
    " 최악이에요",
    " 별로예요",
    " 보통이에요",
    " 좋아요",
    " 최고예요!"
];

// 별점 클릭
stars.forEach(function(star, index) {
    star.addEventListener("click", function() {
        // 같은 별 다시 클릭하면 취소
        if (selectedStar === index + 1) {
            selectedStar = 0;
        } else {
            selectedStar = index + 1;
        }
        
        // 별 색깔 바꾸기
        stars.forEach(function(s, i) {
            if (i < selectedStar) {
                s.style.color = "rgb(238, 241, 50)"; // 노란색
            } else {
                s.style.color = "rgb(233, 236, 239)"; // 회색
            }
        });
        
        // 메시지 바꾸기
        ratingMessage.textContent = starMessages[selectedStar];
        
        // 등록하기 버튼 확인
        checkSubmitButton();
    });
});

// 이미지 업로더 요소들
const imageUploader = document.querySelector('.ImageUploader-module_container');
const fileInput = imageUploader.querySelector('input[type="file"]');
const uploadBtn = imageUploader.querySelector('.ImageUploader-module_button');
const imageList = imageUploader.querySelector('.ImageUploader-module_imageContainer');
const imageCountText = uploadBtn.querySelector('span');

let uploadedFiles = [];
const maxFileCount = 5;

// 댓글창
const commentBox = document.querySelector('.SatisfactionComment-module_textarea');
const charCountText = document.querySelector('.SatisfactionComment-module_lengthLabel');
const submitButton = document.querySelector('.SatisfactionFooter-module_footer button');

// 처음엔 등록하기 버튼 비활성화
if (submitButton) {
    submitButton.disabled = true;
    submitButton.classList.add('Button-module_disabled');
}

// 댓글 쓸 때마다
if (commentBox) {
    commentBox.addEventListener('input', function() {
        const textLength = this.value.length;
        
        // 글자 수 표시
        if (charCountText) {
            charCountText.textContent = textLength + ' / 최소 10자 이상';
        }
        
        // 등록하기 버튼 확인
        checkSubmitButton();
    });
}

// 등록하기 버튼 활성화/비활성화
function checkSubmitButton() {
    const textLength = commentBox ? commentBox.value.length : 0;
    const hasText = textLength >= 10;
    const hasRating = selectedStar > 0;
    
    if (submitButton) {
        if (hasText && hasRating) {
            // 활성화
            submitButton.disabled = false;
            submitButton.classList.remove('Button-module_disabled');
        } else {
            // 비활성화
            submitButton.disabled = true;
            submitButton.classList.add('Button-module_disabled');
        }
    }
}

// 크롭 에디터 관련
let cropModal;
let cropImageBox;
let cropBgImg;
let cropClipImg;
let cropEditor;
let cropAreaBox;
let cropMoveBox;
let cropConfirmBtn;

let selectedFile = null;
let cropPosition = { x: 0, y: 0, width: 0, height: 0 };
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartPosition = {};

// 크롭 에디터 설정
function setupCropEditor() {
    cropModal = document.getElementById('modal3');
    
    if (!cropModal) return;
    
    cropImageBox = cropModal.querySelector('.ClipImage-module_container');
    cropBgImg = cropModal.querySelector('.ClipImage-module_image:not(.ClipImage-module_clip)');
    cropClipImg = cropModal.querySelector('.ClipImage-module_clip');
    cropEditor = cropModal.querySelector('.CropEditor-module_editor');
    cropAreaBox = cropEditor.querySelector('div[style*="position: absolute"]');
    cropMoveBox = cropModal.querySelector('.ChangeBoundsHandle-module_move');
    cropConfirmBtn = cropModal.querySelector('.CropEditor-module_buttons button');
    
    // 배경 이미지 없으면 만들기
    if (cropImageBox && !cropBgImg) {
        const img = document.createElement('img');
        img.className = 'ClipImage-module_image';
        cropImageBox.insertBefore(img, cropImageBox.firstChild);
        cropBgImg = img;
    }
    
    // 마스크 없으면 만들기
    if (cropImageBox && !cropImageBox.querySelector('.ClipImage-module_mask')) {
        const mask = document.createElement('div');
        mask.className = 'ClipImage-module_mask';
        cropImageBox.insertBefore(mask, cropClipImg);
    }
    
    // 확인 버튼 클릭
    if (cropConfirmBtn) {
        cropConfirmBtn.addEventListener('click', saveCroppedImage);
    }
    
    // 드래그 시작
    if (cropMoveBox) {
        cropMoveBox.addEventListener('mousedown', startDragging);
    }
    
    // 마우스 움직임
    document.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', stopDragging);
}

setupCropEditor();

// 업로드 버튼 클릭
uploadBtn.addEventListener('click', function() {
    if (uploadedFiles.length < maxFileCount) {
        fileInput.click();
    } else {
        alert('최대 5개까지 업로드 가능합니다');
    }
});

// 파일 선택했을 때
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // 이미지 파일인지 확인
    const isImage = file.type.match('image/(png|jpeg|jpg)');
    if (!isImage) {
        alert('PNG, JPG, JPEG 파일만 가능합니다');
        fileInput.value = '';
        return;
    }
    
    // 개수 확인
    if (uploadedFiles.length >= maxFileCount) {
        alert('최대 5개까지 업로드 가능합니다');
        fileInput.value = '';
        return;
    }
    
    selectedFile = file;
    showCropEditor(file);
});

// 크롭 에디터 보여주기
function showCropEditor(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = e.target.result;
        const img = new Image();
        
        img.onload = function() {
            // 이미지 크기 조절
            const maxW = Math.min(window.innerWidth * 0.9, 600);
            const maxH = Math.min(window.innerHeight * 0.6, 500);
            let w = img.width;
            let h = img.height;

            if (w > maxW || h > maxH) {
                const ratio = Math.min(maxW / w, maxH / h);
                w = w * ratio;
                h = h * ratio;
            }

            // 크기 설정
            cropImageBox.style.width = w + 'px';
            cropImageBox.style.height = h + 'px';
            cropEditor.style.width = w + 'px';
            cropEditor.style.height = h + 'px';

            // 이미지 넣기
            cropBgImg.src = imageData;
            cropClipImg.src = imageData;

            // 크롭 영역 설정 (중앙 80%)
            cropPosition.width = w * 0.8;
            cropPosition.height = h * 0.8;
            cropPosition.x = (w - cropPosition.width) / 2;
            cropPosition.y = (h - cropPosition.height) / 2;

            updateCropArea();
            updateClippedImage();

            // 모달 열기
            cropModal.style.display = 'flex';
        };
        
        img.src = imageData;
    };
    
    reader.readAsDataURL(file);
}

// 크롭 영역 위치 업데이트
function updateCropArea() {
    cropAreaBox.style.left = cropPosition.x + 'px';
    cropAreaBox.style.top = cropPosition.y + 'px';
    cropAreaBox.style.width = cropPosition.width + 'px';
    cropAreaBox.style.height = cropPosition.height + 'px';
}

// 잘린 이미지 업데이트
function updateClippedImage() {
    const top = cropPosition.y;
    const right = cropPosition.x + cropPosition.width;
    const bottom = cropPosition.y + cropPosition.height;
    const left = cropPosition.x;

    cropClipImg.style.clip = 'rect(' + top + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

// 드래그 시작
function startDragging(e) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartPosition = { x: cropPosition.x, y: cropPosition.y };
    e.preventDefault();
}

// 드래그 중
function dragging(e) {
    if (!isDragging) return;
    
    const moveX = e.clientX - dragStartX;
    const moveY = e.clientY - dragStartY;
    const boxWidth = parseFloat(cropImageBox.style.width);
    const boxHeight = parseFloat(cropImageBox.style.height);

    // 새 위치 계산
    cropPosition.x = Math.max(0, Math.min(dragStartPosition.x + moveX, boxWidth - cropPosition.width));
    cropPosition.y = Math.max(0, Math.min(dragStartPosition.y + moveY, boxHeight - cropPosition.height));

    updateCropArea();
    updateClippedImage();
}

// 드래그 끝
function stopDragging() {
    isDragging = false;
}

// 크롭된 이미지 저장
function saveCroppedImage() {
    const canvas = document.createElement('canvas');
    canvas.width = cropPosition.width;
    canvas.height = cropPosition.height;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = function() {
        const scaleX = img.naturalWidth / parseFloat(cropImageBox.style.width);
        const scaleY = img.naturalHeight / parseFloat(cropImageBox.style.height);

        ctx.drawImage(
            img,
            cropPosition.x * scaleX,
            cropPosition.y * scaleY,
            cropPosition.width * scaleX,
            cropPosition.height * scaleY,
            0,
            0,
            cropPosition.width,
            cropPosition.height
        );

        canvas.toBlob(function(blob) {
            const newFile = new File([blob], selectedFile.name, {
                type: selectedFile.type
            });

            addImageToList(newFile);
            closeCropEditor();
        }, selectedFile.type);
    };
    
    img.src = cropBgImg.src;
}

// 크롭 에디터 닫기
function closeCropEditor() {
    cropModal.style.display = 'none';
    fileInput.value = '';
    selectedFile = null;
}

// 이미지를 리스트에 추가
function addImageToList(file) {
    const index = uploadedFiles.length;
    uploadedFiles.push(file);

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const div = document.createElement('div');
        div.className = 'uploaded-image';
        
        const img = document.createElement('img');
        img.src = e.target.result;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'ImageUploader-module_closeButton';
        deleteBtn.textContent = '×';
        deleteBtn.dataset.index = index;
        
        div.appendChild(img);
        div.appendChild(deleteBtn);
        imageList.appendChild(div);
        
        imageList.scrollLeft = imageList.scrollWidth;
        updateFileCount();
    };
    
    reader.readAsDataURL(file);
}

// 이미지 삭제
imageList.addEventListener('click', function(e) {
    if (e.target.classList.contains('ImageUploader-module_closeButton')) {
        const index = parseInt(e.target.dataset.index);
        
        uploadedFiles.splice(index, 1);
        e.target.closest('.uploaded-image').remove();
        
        // 인덱스 다시 정리
        const allImages = imageList.querySelectorAll('.uploaded-image');
        allImages.forEach(function(img, i) {
            const btn = img.querySelector('.ImageUploader-module_closeButton');
            btn.dataset.index = i;
        });
        
        updateFileCount();
    }
});

// 파일 개수 업데이트
function updateFileCount() {
    imageCountText.textContent = uploadedFiles.length + '/' + maxFileCount;
}