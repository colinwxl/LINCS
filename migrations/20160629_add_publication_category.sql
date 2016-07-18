-- Create analytical_method_development column.
ALTER TABLE publications
ADD analytical_method_development TINYINT NOT NULL
DEFAULT 0;

-- Set the appropriate publications.
UPDATE publications
SET analytical_method_development = 1
WHERE id IN (53, 55, 58, 59, 63);