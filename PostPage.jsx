import React, { useState } from "react";

export default function PostPage() {
  const [postType, setPostType] = useState("question");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    abstract: "",
    articleText: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePost = (e) => {
    e.preventDefault();

    // Title validation
    if (!formData.title.trim()) {
      alert("Error: Please provide a title for your post.");
      return;
    }

    // Type-specific field validations
    if (postType === "question") {
      if (!formData.description.trim()) {
        alert("Error: Please describe your problem.");
        return;
      }
    } else {
      if (!formData.abstract.trim()) {
        alert("Error: Please provide a 1-paragraph abstract.");
        return;
      }
      if (!formData.articleText.trim()) {
        alert("Error: Please provide the article text.");
        return;
      }
    }

    // Tag validation (up to 3 tags)
    if (!formData.tags.trim()) {
      alert("Error: Please add at least 1 tag.");
      return;
    }

    const tagList = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (tagList.length > 3) {
      alert("Error: Please provide a maximum of 3 tags.");
      return;
    }

    // Success alert
    alert(
      `Your ${postType === "question" ? "question" : "article"} post has been sent successfully!`
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.topHeader}>
          <h2 style={styles.pageTitle}>New Post</h2>
        </div>

        {/* Post Type Selector */}
        <div style={styles.typeSelectorRow}>
          <span style={styles.selectLabel}>Select Post Type:</span>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="question"
              checked={postType === "question"}
              onChange={(e) => setPostType(e.target.value)}
            />
            Question
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="article"
              checked={postType === "article"}
              onChange={(e) => setPostType(e.target.value)}
            />
            Article
          </label>
        </div>

        {/* Dynamic Form Area */}
        <form onSubmit={handlePost} style={styles.form}>
          <div style={styles.sectionNotice}>
            <p style={styles.sectionHeading}>What do you want to ask or share</p>
            <p style={styles.sectionSubtitle}>
              This section is designed based on the type of the post. It is developed
              using conditional rendering.
            </p>
          </div>

          {postType === "question" ? (
            /* Question Layout */
            <>
              <div style={styles.inputRow}>
                <label style={styles.fieldLabel}>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Start your question with how, what, why, etc."
                  value={formData.title}
                  onChange={handleChange}
                  style={styles.textInput}
                />
              </div>

              <div style={styles.inputRow}>
                <label style={styles.fieldLabel}>Describe your problem</label>
                <textarea
                  name="description"
                  rows="8"
                  placeholder="Describe your problem"
                  value={formData.description}
                  onChange={handleChange}
                  style={styles.textArea}
                />
              </div>
            </>
          ) : (
            /* Article Layout */
            <>
              <div style={styles.inputRow}>
                <label style={styles.fieldLabel}>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a descriptive title"
                  value={formData.title}
                  onChange={handleChange}
                  style={styles.textInput}
                />
              </div>

              <div style={styles.inputRow}>
                <label style={styles.fieldLabel}>Abstract</label>
                <textarea
                  name="abstract"
                  rows="3"
                  placeholder="Enter a 1-paragraph abstract"
                  value={formData.abstract}
                  onChange={handleChange}
                  style={styles.textArea}
                />
              </div>

              <div style={styles.inputRow}>
                <label style={styles.fieldLabel}>Article Text</label>
                <textarea
                  name="articleText"
                  rows="8"
                  placeholder="Enter a 1-paragraph abstract"
                  value={formData.articleText}
                  onChange={handleChange}
                  style={styles.textArea}
                />
              </div>
            </>
          )}

          {/* Tags shared row */}
          <div style={styles.inputRow}>
            <label style={styles.fieldLabel}>Tags</label>
            <input
              type="text"
              name="tags"
              placeholder={`Please add up to 3 tags to describe what your ${postType} is about e.g., Java`}
              value={formData.tags}
              onChange={handleChange}
              style={styles.textInput}
            />
          </div>

          <div style={styles.buttonRow}>
            <button type="submit" style={styles.submitBtn}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "32px 16px",
    flex: 1,
  },
  card: {
    width: "100%",
    maxWidth: "850px",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    padding: "24px 32px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    textAlign: "left",
  },
  topHeader: {
    marginBottom: "16px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "8px",
  },
  pageTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
  },
  typeSelectorRow: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "20px",
  },
  selectLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    color: "#1f2937",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  sectionNotice: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    padding: "10px 14px",
    marginBottom: "8px",
  },
  sectionHeading: {
    margin: "0 0 4px 0",
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
  },
  sectionSubtitle: {
    margin: 0,
    fontSize: "13px",
    color: "#6b7280",
    lineHeight: "1.4",
  },
  inputRow: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  fieldLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },
  textInput: {
    width: "100%",
    padding: "9px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #cbd5e1",
    outline: "none",
    boxSizing: "border-box",
  },
  textArea: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #cbd5e1",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    resize: "vertical",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "8px",
  },
  submitBtn: {
    backgroundColor: "#94a3b8",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "9px 36px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};